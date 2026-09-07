/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let m = s.length;
    let n = p.length;

    let dp = Array.from(
        { length: m + 1 },
        () => Array(n + 1).fill(false)
    );

    // Empty string aur empty pattern match
    dp[0][0] = true;

    // Agar pattern mein sirf '*' hai
    for (let j = 1; j <= n; j++) {
        if (p[j - 1] === "*") {
            dp[0][j] = dp[0][j - 1];
        }
    }

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {

            if (p[j - 1] === "*" ) {

                // '*' ko empty maan lo
                // OR
                // '*' ko current character match karne do
                dp[i][j] =
                    dp[i][j - 1] ||
                    dp[i - 1][j];

            } else if (
                p[j - 1] === "?" ||
                p[j - 1] === s[i - 1]
            ) {

                // Current character match ho gaya
                dp[i][j] = dp[i - 1][j - 1];
            }
        }
    }

    return dp[m][n];
};