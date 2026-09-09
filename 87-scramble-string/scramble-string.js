/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function(s1, s2) {
    let memo = new Map();

    function solve(a, b) {
        // Same string hai
        if (a === b) {
            return true;
        }

        let key = a + "|" + b;

        // Already calculated
        if (memo.has(key)) {
            return memo.get(key);
        }

        // Same characters nahi hain
        let count = {};

        for (let char of a) {
            count[char] = (count[char] || 0) + 1;
        }

        for (let char of b) {
            count[char] = (count[char] || 0) - 1;
        }

        for (let char in count) {
            if (count[char] !== 0) {
                memo.set(key, false);
                return false;
            }
        }

        // Har possible position par split karo
        for (let i = 1; i < a.length; i++) {

            // Case 1: No swap
            if (
                solve(a.substring(0, i), b.substring(0, i)) &&
                solve(a.substring(i), b.substring(i))
            ) {
                memo.set(key, true);
                return true;
            }

            // Case 2: Swap
            if (
                solve(a.substring(0, i), b.substring(b.length - i)) &&
                solve(a.substring(i), b.substring(0, b.length - i))
            ) {
                memo.set(key, true);
                return true;
            }
        }

        memo.set(key, false);
        return false;
    }

    return solve(s1, s2);
};