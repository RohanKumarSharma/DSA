/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    let small = [];
    let equal = [];
    let large = [];

    for (let num of nums) {
        if (num < pivot) {
            small.push(num);
        } else if (num === pivot) {
            equal.push(num);
        } else {
            large.push(num);
        }
    }

    return [...small, ...equal, ...large];
};