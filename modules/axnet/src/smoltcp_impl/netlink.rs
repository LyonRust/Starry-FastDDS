use core::net::{IpAddr, Ipv4Addr, SocketAddr};
use core::sync::atomic::{AtomicBool, Ordering};

use axhal::time::current_ticks;
use axerrno::{ax_err, ax_err_type, AxError, AxResult};
use smoltcp::{iface::SocketHandle, socket::raw::{self, SendError}};

use super::{SocketSetWrapper, SOCKET_SET};


pub struct NetlinkSocket {
    handle: SocketHandle,
    pid: u32,
    groups: u32,
    nonblock: AtomicBool,
}

impl NetlinkSocket {
    pub fn new(pid: u32, groups: u32) -> Self {
        let socket = SocketSetWrapper::new_raw_socket();
        let handle = SOCKET_SET.add(socket);

        Self { handle, pid, groups, nonblock: AtomicBool::new(false) }
    }

    #[inline]
    pub fn is_nonblocking(&self) -> bool {
        self.nonblock.load(Ordering::Acquire)
    }

    #[inline]
    pub fn set_nonblocking(&self, nonblocking: bool) {
        self.nonblock.store(nonblocking, Ordering::Release);
    }

    pub fn with_socket<R>(&self, f: impl FnOnce(&raw::Socket) -> R) -> R {
        SOCKET_SET.with_socket(self.handle, |s| f(s))
    }

    pub fn bind(&self) -> AxResult {
        // let mut self_local_addr = self.local_addr.write();

        // if local_addr.port() == 0 {
        //     local_addr.set_port(get_ephemeral_port()?);
        // }
        // if self_local_addr.is_some() {
        //     return ax_err!(InvalidInput, "socket bind() failed: already bound");
        // }

        // let local_endpoint = from_core_sockaddr(local_addr);
        // let endpoint = IpListenEndpoint {
        //     addr: (!is_unspecified(local_endpoint.addr)).then_some(local_endpoint.addr),
        //     port: local_endpoint.port,
        // };
        // SOCKET_SET.with_socket_mut::<raw::Socket, _, _>(self.handle, |socket| {
        //     socket.bind(endpoint).or_else(|e| match e {
        //         BindError::InvalidState => ax_err!(AlreadyExists, "socket bind() failed"),
        //         BindError::Unaddressable => ax_err!(InvalidInput, "socket bind() failed"),
        //     })
        // })?;

        // *self_local_addr = Some(local_endpoint);
        // debug!("UDP socket {}: bound on {}", self.handle, endpoint);
        Ok(())
    }

    pub fn send_to(&self, buf: &[u8]) -> AxResult<usize> {
        self.send_impl(buf)
    }

    pub fn recv_from(&self, buf: &mut [u8]) -> AxResult<(usize, SocketAddr)> {
        log::error!("hahahahha 001 ----");
        self.recv_impl(|socket| {
            // log::error!("callback {:?}", socket);
            match socket.recv_slice(buf) {
                Ok(len) => Ok((len, SocketAddr::new(IpAddr::V4(Ipv4Addr::new(0, 0, 0, 0)), 0))),
                Err(_) => ax_err!(BadState, "socket recv_from() failed"),
                // Err(_) => Ok((0, SocketAddr::new(IpAddr::V4(Ipv4Addr::new(0, 0, 0, 0)), 0)))
            }
        })
    }

    /// Receives data from the socket, stores it in the given buffer.
    ///
    /// It will return [`Err(Timeout)`](AxError::Timeout) if expired.
    pub fn recv_from_timeout(&self, buf: &mut [u8], ticks: u64) -> AxResult<(usize, SocketAddr)> {
        let expire_at = current_ticks() + ticks;
        log::error!("current_ticks() {} + ticks {} = {}", current_ticks(), ticks, expire_at);
        self.recv_impl(|socket| match socket.recv_slice(buf) {
            Ok(len) => {
                log::error!("len {}", len);
                Ok((len, SocketAddr::new(IpAddr::V4(Ipv4Addr::new(0, 0, 0, 0)), 0)))},
            Err(err) => {
                log::error!("recv_impl err {}", err);

                if current_ticks() > expire_at {
                    Err(AxError::Timeout)
                } else {
                    Err(AxError::WouldBlock)
                }
            }
        })
    }
}

impl NetlinkSocket {
    fn send_impl(&self, buf: &[u8]) -> AxResult<usize> {
        self.block_on(|| {
            SOCKET_SET.with_socket_mut::<raw::Socket, _, _>(self.handle, |socket| {
                log::error!("+++++send_impl 003 ---- {} buf: {:?}", socket.can_send(), buf);
                if socket.can_send() {
                    socket
                        .send_slice(buf)
                        .map_err(|e| match e {
                            SendError::BufferFull => AxError::WouldBlock,
                        })?;
                    Ok(buf.len())
                } else {
                    // tx buffer is full
                    Err(AxError::WouldBlock)
                }
            })
        })
    }

    fn recv_impl<F, T>(&self, mut op: F) -> AxResult<T>
    where
        F: FnMut(&mut raw::Socket) -> AxResult<T>,
    {
        log::error!("recv_impl 001 ----");
        self.block_on(|| {
            log::error!("recv_impl 003 ----");
            SOCKET_SET.with_socket_mut::<raw::Socket, _, _>(self.handle, |socket| {
                log::error!("recv_impl 003 ---- {}", socket.can_recv());
                // if socket.can_recv() {
                //     // data available
                //     op(socket)
                // } else {
                //     // no more data
                //     Err(AxError::WouldBlock)
                // }
                op(socket)
            })
        })
    }

    fn block_on<F, T>(&self, mut f: F) -> AxResult<T>
    where
        F: FnMut() -> AxResult<T>,
    {
        if self.is_nonblocking() {
            f()
        } else {
            loop {
                SOCKET_SET.poll_interfaces();
                match f() {
                    Ok(t) => return Ok(t),
                    Err(AxError::WouldBlock) => axtask::yield_now(),
                    Err(e) => return Err(e),
                }
            }
        }
    }
}