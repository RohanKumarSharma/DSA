/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let start = 0;
    let maxLength = 1;

    function expand(left, right) {
        while (
            left >= 0 &&
            right < s.length &&
            s[left] === s[right]
        ) {
            left--;
            right++;
        }

        return right - left - 1;
    }

    for (let i = 0; i < s.length; i++) {

        // Odd length palindrome
        let oddLength = expand(i, i);

        // Even length palindrome
        let evenLength = expand(i, i + 1);

        let length = Math.max(oddLength, evenLength);

        if (length > maxLength) {
            maxLength = length;

            start = i - Math.floor((length - 1) / 2);
        }
    }

    return s.substring(start, start + maxLength);
};