/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[right]) {
            // Minimum right side mein hai
            left = mid + 1;
        } else {
            // Minimum left side mein ho sakta hai
            right = mid;
        }
    }

    return nums[left];
};