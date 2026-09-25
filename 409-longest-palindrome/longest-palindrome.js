/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let map = new Map();
    let length = 0;
    let hasOdd = false;

    for (let char of s) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    for (let count of map.values()) {
        length += Math.floor(count / 2) * 2;

        if (count % 2 === 1) {
            hasOdd = true;
        }
    }

    if (hasOdd) {
        length++;
    }

    return length;
};