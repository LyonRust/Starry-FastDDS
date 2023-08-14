//! log_b(a) approximation for a single-precision float.

use super::F32;

impl F32 {
    /// Approximates the logarithm of the number with respect to an arbitrary base.
    pub fn log(self, base: Self) -> Self {
        (Self::ONE / base.ln()) * self.ln()
    }
}

#[cfg(test)]
mod tests {
    use super::F32;

    pub(crate) const MAX_ERROR: f32 = 0.001;

    /// log3(x) test vectors - `(input, output)`
    pub(crate) const TEST_VECTORS_BASE3: &[(f32, f32)] = &[
        (1e-20, -41.918_064),
        (1e-19, -39.822_16),
        (1e-18, -37.726_26),
        (1e-17, -35.630_356),
        (1e-16, -33.534_454),
        (1e-15, -31.438_549),
        (1e-14, -29.342_646),
        (1e-13, -27.246_744),
        (1e-12, -25.150_839),
        (1e-11, -23.054_935),
        (1e-10, -20.959_032),
        (1e-09, -18.863_13),
        (1e-08, -16.767_227),
        (1e-07, -14.671_323),
        (1e-06, -12.575_419),
        (1e-05, -10.479_516),
        (1e-04, -8.383_614),
        (0.001, -6.287_709_7),
        (0.01, -4.191_807),
        (0.1, -2.095_903_4),
        (10.0, 2.095_903_4),
        (100.0, 4.191_807),
        (1000.0, 6.287_709_7),
        (10000.0, 8.383_614),
        (100000.0, 10.479_516),
        (1000000.0, 12.575_419),
        (10000000.0, 14.671_323),
        (100000000.0, 16.767_227),
        (1000000000.0, 18.863_13),
        (10000000000.0, 20.959_032),
        (100000000000.0, 23.054_935),
        (1000000000000.0, 25.150_839),
        (10000000000000.0, 27.246_744),
        (100000000000000.0, 29.342_646),
        (1000000000000000.0, 31.438_549),
        (1e+16, 33.534_454),
        (1e+17, 35.630_356),
        (1e+18, 37.726_26),
        (1e+19, 39.822_16),
    ];

    /// log5.5(x) test vectors - `(input, output)`
    pub(crate) const TEST_VECTORS_BASE5_5: &[(f32, f32)] = &[
        (1e-20, -27.013_786),
        (1e-19, -25.663_097),
        (1e-18, -24.312_408),
        (1e-17, -22.961_72),
        (1e-16, -21.611_03),
        (1e-15, -20.260_34),
        (1e-14, -18.909_65),
        (1e-13, -17.558_962),
        (1e-12, -16.208_273),
        (1e-11, -14.857_583),
        (1e-10, -13.506_893),
        (1e-09, -12.156_204),
        (1e-08, -10.805_515),
        (1e-07, -9.454_825),
        (1e-06, -8.104_136),
        (1e-05, -6.753_446_6),
        (1e-04, -5.402_757_6),
        (0.001, -4.052_068),
        (0.01, -2.701_378_8),
        (0.1, -1.350_689_4),
        (10.0, 1.350_689_4),
        (100.0, 2.701_378_8),
        (1000.0, 4.052_068),
        (10000.0, 5.402_757_6),
        (100000.0, 6.753_446_6),
        (1000000.0, 8.104_136),
        (10000000.0, 9.454_825),
        (100000000.0, 10.805_515),
        (1000000000.0, 12.156_204),
        (10000000000.0, 13.506_893),
        (100000000000.0, 14.857_583),
        (1000000000000.0, 16.208_273),
        (10000000000000.0, 17.558_962),
        (100000000000000.0, 18.909_65),
        (1000000000000000.0, 20.260_34),
        (1e+16, 21.611_03),
        (1e+17, 22.961_72),
        (1e+18, 24.312_408),
        (1e+19, 25.663_097),
    ];

    /// log12.7(x) test vectors - `(input, output)`
    pub(crate) const TEST_VECTORS_BASE12_7: &[(f32, f32)] = &[
        (1e-20, -18.119_164),
        (1e-19, -17.213_205),
        (1e-18, -16.307_247),
        (1e-17, -15.401_289),
        (1e-16, -14.495_331),
        (1e-15, -13.589_373),
        (1e-14, -12.683_414),
        (1e-13, -11.777_456),
        (1e-12, -10.871_498),
        (1e-11, -9.965_54),
        (1e-10, -9.059_582),
        (1e-09, -8.153_624),
        (1e-08, -7.247_665_4),
        (1e-07, -6.341_707),
        (1e-06, -5.435_749),
        (1e-05, -4.529_791),
        (1e-04, -3.623_832_7),
        (0.001, -2.717_874_5),
        (0.01, -1.811_916_4),
        (0.1, -0.905_958_2),
        (10.0, 0.905_958_2),
        (100.0, 1.811_916_4),
        (1000.0, 2.717_874_5),
        (10000.0, 3.623_832_7),
        (100000.0, 4.529_791),
        (1000000.0, 5.435_749),
        (10000000.0, 6.341_707),
        (100000000.0, 7.247_665_4),
        (1000000000.0, 8.153_624),
        (10000000000.0, 9.059_582),
        (100000000000.0, 9.965_54),
        (1000000000000.0, 10.871_498),
        (10000000000000.0, 11.777_456),
        (100000000000000.0, 12.683_414),
        (1000000000000000.0, 13.589_373),
        (1e+16, 14.495_331),
        (1e+17, 15.401_289),
        (1e+18, 16.307_247),
        (1e+19, 17.213_205),
    ];

    #[test]
    fn sanity_check() {
        assert_eq!(F32::ONE.log(F32(3.0)), F32::ZERO);
        assert_eq!(F32::ONE.log(F32(5.5)), F32::ZERO);
        assert_eq!(F32::ONE.log(F32(12.7)), F32::ZERO);

        for &(x, expected) in TEST_VECTORS_BASE3 {
            let log_x = F32(x).log(F32(3.0));
            let relative_error = (log_x - expected).abs() / expected;

            assert!(
                relative_error <= MAX_ERROR,
                "relative_error {} too large: {} vs {}",
                relative_error,
                log_x,
                expected
            );
        }

        for &(x, expected) in TEST_VECTORS_BASE5_5 {
            let log_x = F32(x).log(F32(5.5));
            let relative_error = (log_x - expected).abs() / expected;

            assert!(
                relative_error <= MAX_ERROR,
                "relative_error {} too large: {} vs {}",
                relative_error,
                log_x,
                expected
            );
        }

        for &(x, expected) in TEST_VECTORS_BASE12_7 {
            let log_x = F32(x).log(F32(12.7));
            let relative_error = (log_x - expected).abs() / expected;

            assert!(
                relative_error <= MAX_ERROR,
                "relative_error {} too large: {} vs {}",
                relative_error,
                log_x,
                expected
            );
        }
    }
}
