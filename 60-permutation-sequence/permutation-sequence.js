/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    let numbers = [];

    // 1 se n tak numbers
    for (let i = 1; i <= n; i++) {
        numbers.push(i);
    }

    let result = "";

    // Factorials
    let factorial = 1;
    for (let i = 1; i < n; i++) {
        factorial *= i;
    }

    // k ko 0-based index mein convert karo
    k--;

    while (numbers.length > 0) {
        let index = Math.floor(k / factorial);

        result += numbers[index];

        numbers.splice(index, 1);

        if (numbers.length === 0) {
            break;
        }

        k = k % factorial;

        factorial = factorial / numbers.length;
    }

    return result;
};