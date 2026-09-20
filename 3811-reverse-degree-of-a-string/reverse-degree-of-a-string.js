/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function(s) {
    let sum = 0;

    for (let i = 0; i < s.length; i++) {
        let value = 26 - (s.charCodeAt(i) - 97);

        let position = i + 1;

        sum += value * position;
    }

    return sum;
};