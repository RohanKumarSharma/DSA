/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
     let a = 0;
    let b = 0;

    for (let i = 2; i <= cost.length; i++) {
        let current = Math.min(
            a + cost[i - 2],
            b + cost[i - 1]
        );

        a = b;
        b = current;
    }

    return b;
};