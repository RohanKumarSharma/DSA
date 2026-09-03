/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    const MAX = 2147483647;
    const MIN = -2147483648;

    // Special overflow case
    if (dividend === MIN && divisor === -1) {
        return MAX;
    }

    // Sign decide karo
    let negative = (dividend < 0) !== (divisor < 0);

    // Positive values mein kaam karenge
    let a = Math.abs(dividend);
    let b = Math.abs(divisor);

    let quotient = 0;

    while (a >= b) {
        let value = b;
        let count = 1;

        // Divisor ko double karte jao
        while (a >= value + value) {
            value += value;
            count += count;
        }

        a -= value;
        quotient += count;
    }

    return negative ? -quotient : quotient;
};