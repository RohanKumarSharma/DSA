/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let maxProduct = nums[0];
    let minProduct = nums[0];

    let answer = nums[0];

    for (let i = 1; i < nums.length; i++) {
        let num = nums[i];

        if (num < 0) {
            let temp = maxProduct;
            maxProduct = minProduct;
            minProduct = temp;
        }

        maxProduct = Math.max(num, maxProduct * num);
        minProduct = Math.min(num, minProduct * num);

        answer = Math.max(answer, maxProduct);
    }

    return answer;
};