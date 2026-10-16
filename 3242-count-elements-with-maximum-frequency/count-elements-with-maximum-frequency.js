/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    let freq = {};

    for (let num of nums) {
        freq[num] = (freq[num] || 0) + 1;
    }

    let maxFreq = Math.max(...Object.values(freq));

    let total = 0;

    for (let num in freq) {
        if (freq[num] === maxFreq) {
            total += freq[num];
        }
    }

    return total;
};