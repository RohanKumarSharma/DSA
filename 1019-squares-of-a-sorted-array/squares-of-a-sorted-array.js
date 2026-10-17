/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let result = [];

    for (let num of nums) {
        result.push(num * num);
    }

    result.sort((a, b) => a - b);

    return result;
};