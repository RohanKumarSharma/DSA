/**
 * @param {number[][]} img1
 * @param {number[][]} img2
 * @return {number}
 */
var largestOverlap = function(img1, img2) {
    let n = img1.length;
    let maxOverlap = 0;

    // img1 ko har possible direction mein shift karo
    for (let rowShift = -(n - 1); rowShift <= n - 1; rowShift++) {
        for (let colShift = -(n - 1); colShift <= n - 1; colShift++) {

            let overlap = 0;

            for (let i = 0; i < n; i++) {
                for (let j = 0; j < n; j++) {

                    // img1 ka shifted position
                    let x = i + rowShift;
                    let y = j + colShift;

                    // Matrix ke andar hai?
                    if (
                        x >= 0 && x < n &&
                        y >= 0 && y < n
                    ) {
                        if (img1[i][j] === 1 && img2[x][y] === 1) {
                            overlap++;
                        }
                    }
                }
            }

            maxOverlap = Math.max(maxOverlap, overlap);
        }
    }

    return maxOverlap;
};