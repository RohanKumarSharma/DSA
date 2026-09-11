/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    if (points.length <= 2) {
        return points.length;
    }

    let answer = 0;

    for (let i = 0; i < points.length; i++) {
        let map = new Map();

        for (let j = i + 1; j < points.length; j++) {
            let dx = points[j][0] - points[i][0];
            let dy = points[j][1] - points[i][1];

            // Vertical line
            if (dx === 0) {
                dy = 1;
                dx = 0;
            }
            // Horizontal line
            else if (dy === 0) {
                dy = 0;
                dx = 1;
            }
            // Normal slope
            else {
                let gcd = getGCD(dx, dy);

                dx = dx / gcd;
                dy = dy / gcd;

                // Same sign format
                if (dx < 0) {
                    dx = -dx;
                    dy = -dy;
                }
            }

            let slope = dy + "/" + dx;

            map.set(slope, (map.get(slope) || 0) + 1);

            answer = Math.max(answer, map.get(slope) + 1);
        }
    }

    return answer;


    function getGCD(a, b) {
        a = Math.abs(a);
        b = Math.abs(b);

        while (b !== 0) {
            let temp = a % b;
            a = b;
            b = temp;
        }

        return a;
    }
};