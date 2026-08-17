/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);

    const result = [];

    for (let i = 0; i < nums.length - 2; i++) {

        // Duplicate first element skip
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        // Since array is sorted, if first number > 0,
        // three numbers cannot make 0.
        if (nums[i] > 0) {
            break;
        }

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([
                    nums[i],
                    nums[left],
                    nums[right]
                ]);

                // Duplicate left values skip
                while (left < right && nums[left] === nums[left + 1]) {
                    left++;
                }

                // Duplicate right values skip
                while (left < right && nums[right] === nums[right - 1]) {
                    right--;
                }

                left++;
                right--;

            } else if (sum < 0) {
                left++;

            } else {
                right--;
            }
        }
    }

    return result;
};