/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let n = nums.length;

    // Step 1: Right se pehla decreasing point find karo
    let i = n - 2;

    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }

    // Step 2: Agar decreasing point mila
    if (i >= 0) {
        // Right se nums[i] se bada element find karo
        let j = n - 1;

        while (nums[j] <= nums[i]) {
            j--;
        }

        // Swap
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    // Step 3: i ke baad wale part ko reverse karo
    let left = i + 1;
    let right = n - 1;

    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
};