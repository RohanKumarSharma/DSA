/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAlternatingSum = function(nums) {
     nums = nums.map(num => num * num).sort((a, b) => b - a);

    let score = 0;
    let positiveCount = Math.ceil(nums.length / 2);

    for (let i = 0; i < nums.length; i++) {
        if (i < positiveCount) {
            score += nums[i];
        } else {
            score -= nums[i];
        }
    }

    return score;
};