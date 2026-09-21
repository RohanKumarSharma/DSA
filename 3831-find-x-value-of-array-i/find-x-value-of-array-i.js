/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var resultArray = function(nums, k) {
    let result = new Array(k).fill(0);

    // dp[r] = current index par end hone wale
    // subarrays jinka product % k = r
    let dp = new Array(k).fill(0);

    for (let num of nums) {
        let newDp = new Array(k).fill(0);

        let value = num % k;

        // Current number se naya subarray start
        newDp[value]++;

        // Purane subarrays ke end me current number add karo
        for (let r = 0; r < k; r++) {
            if (dp[r] > 0) {
                let newRemainder = (r * value) % k;

                newDp[newRemainder] += dp[r];
            }
        }

        dp = newDp;

        // Current position par bane sab subarrays ko answer me add karo
        for (let r = 0; r < k; r++) {
            result[r] += dp[r];
        }
    }

    return result;
};