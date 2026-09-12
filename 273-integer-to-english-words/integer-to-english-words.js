/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
    if (num === 0) return "Zero";

    let ones = [
        "", "One", "Two", "Three", "Four",
        "Five", "Six", "Seven", "Eight", "Nine",
        "Ten", "Eleven", "Twelve", "Thirteen",
        "Fourteen", "Fifteen", "Sixteen",
        "Seventeen", "Eighteen", "Nineteen"
    ];

    let tens = [
        "", "", "Twenty", "Thirty", "Forty",
        "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"
    ];

    function helper(n) {
        let result = [];

        if (n >= 100) {
            result.push(ones[Math.floor(n / 100)]);
            result.push("Hundred");
            n = n % 100;
        }

        if (n >= 20) {
            result.push(tens[Math.floor(n / 10)]);
            n = n % 10;
        }

        if (n > 0) {
            result.push(ones[n]);
        }

        return result.join(" ");
    }

    let result = [];

    if (Math.floor(num / 1000000000) > 0) {
        result.push(helper(Math.floor(num / 1000000000)));
        result.push("Billion");
        num = num % 1000000000;
    }

    if (Math.floor(num / 1000000) > 0) {
        result.push(helper(Math.floor(num / 1000000)));
        result.push("Million");
        num = num % 1000000;
    }

    if (Math.floor(num / 1000) > 0) {
        result.push(helper(Math.floor(num / 1000)));
        result.push("Thousand");
        num = num % 1000;
    }

    if (num > 0) {
        result.push(helper(num));
    }

    return result.join(" ");
};