/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let rows = Array.from({ length: 9 }, () => new Set());
    let cols = Array.from({ length: 9 }, () => new Set());
    let boxes = Array.from({ length: 9 }, () => new Set());

    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {

            let num = board[r][c];

            // Empty cell ko ignore karo
            if (num === ".") {
                continue;
            }

            // 3 x 3 box ka index
            let box = Math.floor(r / 3) * 3 + Math.floor(c / 3);

            // Row, column ya box mein duplicate mila
            if (
                rows[r].has(num) ||
                cols[c].has(num) ||
                boxes[box].has(num)
            ) {
                return false;
            }

            // Number ko store karo
            rows[r].add(num);
            cols[c].add(num);
            boxes[box].add(num);
        }
    }

    return true;
};