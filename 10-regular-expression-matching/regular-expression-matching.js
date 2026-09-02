/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const memo = new Map();

    function solve(i, j) {
        // Pattern khatam ho gaya
        if (j === p.length) {
            return i === s.length;
        }

        // Current character match karta hai ya nahi
        let firstMatch =
            i < s.length &&
            (s[i] === p[j] || p[j] === ".");

        let key = i + "," + j;

        if (memo.has(key)) {
            return memo.get(key);
        }

        let answer;

        // Next character '*'
        if (j + 1 < p.length && p[j + 1] === "*") {

            answer =
                // '*' ko 0 times use karo
                solve(i, j + 2) ||

                // '*' ko 1 ya more times use karo
                (firstMatch && solve(i + 1, j));

        } else {
            answer =
                firstMatch &&
                solve(i + 1, j + 1);
        }

        memo.set(key, answer);

        return answer;
    }

    return solve(0, 0);
};