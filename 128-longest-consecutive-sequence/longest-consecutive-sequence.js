/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const set = new Set(nums);
    let longest = 0;

    for (let num of set) {

        if (!set.has(num - 1)) {

            let count = 1;

            while (set.has(num + count)) {
                count++;
            }

            longest = Math.max(longest, count);
        }
    }

    return longest;
};