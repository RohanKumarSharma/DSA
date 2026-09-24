/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let n = nums.length;
    let answer = new Array(n).fill(1);

    // Left side ka product
    let left = 1;

    for (let i = 0; i < n; i++) {
        answer[i] = left;
        left *= nums[i];
    }

    // Right side ka product
    let right = 1;

    for (let i = n - 1; i >= 0; i--) {
        answer[i] *= right;
        right *= nums[i];
    }

    return answer;
};