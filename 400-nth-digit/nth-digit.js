/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
    let digits = 1;
    let count = 9;
    let start = 1;

    // Find karo n kis digit-length wale numbers mein hai
    while (n > digits * count) {
        n -= digits * count;

        digits++;
        count *= 10;
        start *= 10;
    }

    // Kaunsa number hai?
    let number = start + Math.floor((n - 1) / digits);

    // Us number ke andar kaunsa digit chahiye?
    let index = (n - 1) % digits;

    return Number(String(number)[index]);
};