/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if (num1 === "0" || num2 === "0") {
        return "0";
    }

    let result = Array(num1.length + num2.length).fill(0);

    for (let i = num1.length - 1; i >= 0; i--) {
        for (let j = num2.length - 1; j >= 0; j--) {

            let n1 = num1[i] - "0";
            let n2 = num2[j] - "0";

            let product = n1 * n2;

            let position1 = i + j;
            let position2 = i + j + 1;

            let sum = product + result[position2];

            result[position2] = sum % 10;
            result[position1] += Math.floor(sum / 10);
        }
    }

    // Starting ke extra zeros remove karo
    let start = 0;

    while (start < result.length && result[start] === 0) {
        start++;
    }

    return result.slice(start).join("");
};