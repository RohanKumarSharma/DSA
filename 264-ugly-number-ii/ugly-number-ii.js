/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    let ugly = Array(n);

    ugly[0] = 1;

    let i2 = 0;
    let i3 = 0;
    let i5 = 0;

    for (let i = 1; i < n; i++) {
        let next2 = ugly[i2] * 2;
        let next3 = ugly[i3] * 3;
        let next5 = ugly[i5] * 5;

        ugly[i] = Math.min(next2, next3, next5);

        if (ugly[i] === next2) {
            i2++;
        }

        if (ugly[i] === next3) {
            i3++;
        }

        if (ugly[i] === next5) {
            i5++;
        }
    }

    return ugly[n - 1];
};