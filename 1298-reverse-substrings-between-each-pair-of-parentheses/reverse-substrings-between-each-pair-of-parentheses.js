/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
    let stack = [];
    let current = "";

    for (let char of s) {
        if (char === "(") {
            stack.push(current);
            current = "";
        } 
        else if (char === ")") {
            current = current.split("").reverse().join("");

            current = stack.pop() + current;
        } 
        else {
            current += char;
        }
    }

    return current;
};