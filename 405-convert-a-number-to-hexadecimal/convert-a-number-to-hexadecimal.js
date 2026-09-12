/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    if (num === 0) return "0";

    let hex = "0123456789abcdef";
    let result = "";

    // Negative number ko 32-bit unsigned form mein convert
    if (num < 0) {
        num = num >>> 0;
    }

    while (num > 0) {
        let remainder = num % 16;

        result = hex[remainder] + result;

        num = Math.floor(num / 16);
    }

    return result;
};