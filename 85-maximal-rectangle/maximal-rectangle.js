/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    if (matrix.length === 0) return 0;

    const rows = matrix.length;
    const cols = matrix[0].length;

    const heights = new Array(cols).fill(0);
    let maxArea = 0;

    for (let i = 0; i < rows; i++) {

        // Current row se histogram banao
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === "1") {
                heights[j]++;
            } else {
                heights[j] = 0;
            }
        }

        // Largest Rectangle in Histogram
        const stack = [];

        for (let j = 0; j <= cols; j++) {
            const currentHeight = j === cols ? 0 : heights[j];

            while (
                stack.length > 0 &&
                currentHeight < heights[stack[stack.length - 1]]
            ) {
                const height = heights[stack.pop()];

                const width =
                    stack.length === 0
                        ? j
                        : j - stack[stack.length - 1] - 1;

                maxArea = Math.max(maxArea, height * width);
            }

            stack.push(j);
        }
    }

    return maxArea;
};