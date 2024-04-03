(function() {var type_impls = {
"axstarry":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-LinuxError\" class=\"impl\"><a class=\"src rightside\" href=\"src/axerrno/home/runner/work/Starry-FastDDS/Starry-FastDDS/target/debug/build/axerrno-a892b34e2c7008f4/out/linux_errno.rs.html#413\">source</a><a href=\"#impl-LinuxError\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"enum\" href=\"axerrno/linux_errno/enum.LinuxError.html\" title=\"enum axerrno::linux_errno::LinuxError\">LinuxError</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_str\" class=\"method\"><a class=\"src rightside\" href=\"src/axerrno/home/runner/work/Starry-FastDDS/Starry-FastDDS/target/debug/build/axerrno-a892b34e2c7008f4/out/linux_errno.rs.html#415\">source</a><h4 class=\"code-header\">pub const fn <a href=\"axerrno/linux_errno/enum.LinuxError.html#tymethod.as_str\" class=\"fn\">as_str</a>(&amp;self) -&gt; &amp;'static <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a></h4></section></summary><div class=\"docblock\"><p>Returns the error description.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.code\" class=\"method\"><a class=\"src rightside\" href=\"src/axerrno/home/runner/work/Starry-FastDDS/Starry-FastDDS/target/debug/build/axerrno-a892b34e2c7008f4/out/linux_errno.rs.html#553\">source</a><h4 class=\"code-header\">pub const fn <a href=\"axerrno/linux_errno/enum.LinuxError.html#tymethod.code\" class=\"fn\">code</a>(self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i32.html\">i32</a></h4></section></summary><div class=\"docblock\"><p>Returns the error code value in <code>i32</code>.</p>\n</div></details></div></details>",0,"axstarry::SyscallError"],["<section id=\"impl-StructuralPartialEq-for-LinuxError\" class=\"impl\"><a class=\"src rightside\" href=\"src/axerrno/home/runner/work/Starry-FastDDS/Starry-FastDDS/target/debug/build/axerrno-a892b34e2c7008f4/out/linux_errno.rs.html#5\">source</a><a href=\"#impl-StructuralPartialEq-for-LinuxError\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"enum\" href=\"axerrno/linux_errno/enum.LinuxError.html\" title=\"enum axerrno::linux_errno::LinuxError\">LinuxError</a></h3></section>","StructuralPartialEq","axstarry::SyscallError"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CAxError%3E-for-LinuxError\" class=\"impl\"><a class=\"src rightside\" href=\"src/axerrno/lib.rs.html#247\">source</a><a href=\"#impl-From%3CAxError%3E-for-LinuxError\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"axerrno/enum.AxError.html\" title=\"enum axerrno::AxError\">AxError</a>&gt; for <a class=\"enum\" href=\"axerrno/linux_errno/enum.LinuxError.html\" title=\"enum axerrno::linux_errno::LinuxError\">LinuxError</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/axerrno/lib.rs.html#248\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(e: <a class=\"enum\" href=\"axerrno/enum.AxError.html\" title=\"enum axerrno::AxError\">AxError</a>) -&gt; <a class=\"enum\" href=\"axerrno/linux_errno/enum.LinuxError.html\" title=\"enum axerrno::linux_errno::LinuxError\">LinuxError</a></h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<AxError>","axstarry::SyscallError"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-LinuxError\" class=\"impl\"><a class=\"src rightside\" href=\"src/axerrno/home/runner/work/Starry-FastDDS/Starry-FastDDS/target/debug/build/axerrno-a892b34e2c7008f4/out/linux_errno.rs.html#5\">source</a><a href=\"#impl-PartialEq-for-LinuxError\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"enum\" href=\"axerrno/linux_errno/enum.LinuxError.html\" title=\"enum axerrno::linux_errno::LinuxError\">LinuxError</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/axerrno/home/runner/work/Starry-FastDDS/Starry-FastDDS/target/debug/build/axerrno-a892b34e2c7008f4/out/linux_errno.rs.html#5\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"enum\" href=\"axerrno/linux_errno/enum.LinuxError.html\" title=\"enum axerrno::linux_errno::LinuxError\">LinuxError</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#239\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","axstarry::SyscallError"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-LinuxError\" class=\"impl\"><a class=\"src rightside\" href=\"src/axerrno/home/runner/work/Starry-FastDDS/Starry-FastDDS/target/debug/build/axerrno-a892b34e2c7008f4/out/linux_errno.rs.html#5\">source</a><a href=\"#impl-Debug-for-LinuxError\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"axerrno/linux_errno/enum.LinuxError.html\" title=\"enum axerrno::linux_errno::LinuxError\">LinuxError</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/axerrno/home/runner/work/Starry-FastDDS/Starry-FastDDS/target/debug/build/axerrno-a892b34e2c7008f4/out/linux_errno.rs.html#5\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","axstarry::SyscallError"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TryFrom%3Ci32%3E-for-LinuxError\" class=\"impl\"><a class=\"src rightside\" href=\"src/axerrno/home/runner/work/Starry-FastDDS/Starry-FastDDS/target/debug/build/axerrno-a892b34e2c7008f4/out/linux_errno.rs.html#271\">source</a><a href=\"#impl-TryFrom%3Ci32%3E-for-LinuxError\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i32.html\">i32</a>&gt; for <a class=\"enum\" href=\"axerrno/linux_errno/enum.LinuxError.html\" title=\"enum axerrno::linux_errno::LinuxError\">LinuxError</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Error\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Error\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html#associatedtype.Error\" class=\"associatedtype\">Error</a> = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i32.html\">i32</a></h4></section></summary><div class='docblock'>The type returned in the event of a conversion error.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/axerrno/home/runner/work/Starry-FastDDS/Starry-FastDDS/target/debug/build/axerrno-a892b34e2c7008f4/out/linux_errno.rs.html#274\">source</a><a href=\"#method.try_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html#tymethod.try_from\" class=\"fn\">try_from</a>(\n    value: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i32.html\">i32</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"enum\" href=\"axerrno/linux_errno/enum.LinuxError.html\" title=\"enum axerrno::linux_errno::LinuxError\">LinuxError</a>, &lt;<a class=\"enum\" href=\"axerrno/linux_errno/enum.LinuxError.html\" title=\"enum axerrno::linux_errno::LinuxError\">LinuxError</a> as <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i32.html\">i32</a>&gt;&gt;::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html#associatedtype.Error\" title=\"type core::convert::TryFrom::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Performs the conversion.</div></details></div></details>","TryFrom<i32>","axstarry::SyscallError"],["<section id=\"impl-Copy-for-LinuxError\" class=\"impl\"><a class=\"src rightside\" href=\"src/axerrno/home/runner/work/Starry-FastDDS/Starry-FastDDS/target/debug/build/axerrno-a892b34e2c7008f4/out/linux_errno.rs.html#5\">source</a><a href=\"#impl-Copy-for-LinuxError\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"enum\" href=\"axerrno/linux_errno/enum.LinuxError.html\" title=\"enum axerrno::linux_errno::LinuxError\">LinuxError</a></h3></section>","Copy","axstarry::SyscallError"],["<section id=\"impl-StructuralEq-for-LinuxError\" class=\"impl\"><a class=\"src rightside\" href=\"src/axerrno/home/runner/work/Starry-FastDDS/Starry-FastDDS/target/debug/build/axerrno-a892b34e2c7008f4/out/linux_errno.rs.html#5\">source</a><a href=\"#impl-StructuralEq-for-LinuxError\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralEq.html\" title=\"trait core::marker::StructuralEq\">StructuralEq</a> for <a class=\"enum\" href=\"axerrno/linux_errno/enum.LinuxError.html\" title=\"enum axerrno::linux_errno::LinuxError\">LinuxError</a></h3></section>","StructuralEq","axstarry::SyscallError"],["<section id=\"impl-Eq-for-LinuxError\" class=\"impl\"><a class=\"src rightside\" href=\"src/axerrno/home/runner/work/Starry-FastDDS/Starry-FastDDS/target/debug/build/axerrno-a892b34e2c7008f4/out/linux_errno.rs.html#5\">source</a><a href=\"#impl-Eq-for-LinuxError\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"enum\" href=\"axerrno/linux_errno/enum.LinuxError.html\" title=\"enum axerrno::linux_errno::LinuxError\">LinuxError</a></h3></section>","Eq","axstarry::SyscallError"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Display-for-LinuxError\" class=\"impl\"><a class=\"src rightside\" href=\"src/axerrno/lib.rs.html#276\">source</a><a href=\"#impl-Display-for-LinuxError\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"enum\" href=\"axerrno/linux_errno/enum.LinuxError.html\" title=\"enum axerrno::linux_errno::LinuxError\">LinuxError</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/axerrno/lib.rs.html#277\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html#tymethod.fmt\">Read more</a></div></details></div></details>","Display","axstarry::SyscallError"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-LinuxError\" class=\"impl\"><a class=\"src rightside\" href=\"src/axerrno/home/runner/work/Starry-FastDDS/Starry-FastDDS/target/debug/build/axerrno-a892b34e2c7008f4/out/linux_errno.rs.html#5\">source</a><a href=\"#impl-Clone-for-LinuxError\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"axerrno/linux_errno/enum.LinuxError.html\" title=\"enum axerrno::linux_errno::LinuxError\">LinuxError</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/axerrno/home/runner/work/Starry-FastDDS/Starry-FastDDS/target/debug/build/axerrno-a892b34e2c7008f4/out/linux_errno.rs.html#5\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"enum\" href=\"axerrno/linux_errno/enum.LinuxError.html\" title=\"enum axerrno::linux_errno::LinuxError\">LinuxError</a></h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","axstarry::SyscallError"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()