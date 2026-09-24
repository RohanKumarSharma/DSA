/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map();

    // Frequency count
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    // Frequency ke according sort
    let arr = Array.from(map.entries());

    arr.sort((a, b) => b[1] - a[1]);

    // Top k elements
    let result = [];

    for (let i = 0; i < k; i++) {
        result.push(arr[i][0]);
    }

    return result;
};