/**
 * @param {number[]} nums
 * @return {number}
 */
var maxRotateFunction = function(nums) {
    let n = nums.length;

    let sum = 0;
    let f = 0;

    // F(0) calculate karo
    for (let i = 0; i < n; i++) {
        sum += nums[i];
        f += i * nums[i];
    }

    let max = f;

    // Baaki rotations calculate karo
    for (let i = n - 1; i >= 0; i--) {
        f = f + sum - n * nums[i];

        max = Math.max(max, f);
    }

    return max;
};