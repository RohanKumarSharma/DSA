/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numberOfSets = function(n, k) {
    const MOD = 1000000007;

    let dp = Array.from(
        { length: k + 1 },
        () => Array(n).fill(0)
    );

    // 0 segments banane ka 1 way
    for (let i = 0; i < n; i++) {
        dp[0][i] = 1;
    }

    for (let j = 1; j <= k; j++) {
        let sum = 0;

        for (let i = 1; i < n; i++) {

            // Previous states ka prefix sum
            sum = (sum + dp[j - 1][i - 1]) % MOD;

            // Current segment ko extend karna
            dp[j][i] = (dp[j][i - 1] + sum) % MOD;
        }
    }

    return dp[k][n - 1];
};