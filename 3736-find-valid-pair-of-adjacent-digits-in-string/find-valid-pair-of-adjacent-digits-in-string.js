/**
 * @param {string} s
 * @return {string}
 */
var findValidPair = function(s) {
    let count = new Array(10).fill(0);

    // Count frequency of every digit
    for (let char of s) {
        count[char - "0"]++;
    }

    // Check adjacent pairs
    for (let i = 0; i < s.length - 1; i++) {
        let a = s[i] - "0";
        let b = s[i + 1] - "0";

        if (
            a !== b &&
            count[a] === a &&
            count[b] === b
        ) {
            return s[i] + s[i + 1];
        }
    }

    return "";
};