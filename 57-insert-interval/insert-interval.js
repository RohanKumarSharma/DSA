/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let result = [];
    let i = 0;

    // 1. Jo intervals newInterval se pehle hain
    while (
        i < intervals.length &&
        intervals[i][1] < newInterval[0]
    ) {
        result.push(intervals[i]);
        i++;
    }

    // 2. Overlapping intervals ko merge karo
    while (
        i < intervals.length &&
        intervals[i][0] <= newInterval[1]
    ) {
        newInterval[0] = Math.min(
            newInterval[0],
            intervals[i][0]
        );

        newInterval[1] = Math.max(
            newInterval[1],
            intervals[i][1]
        );

        i++;
    }

    // Merged newInterval add karo
    result.push(newInterval);

    // 3. Baaki intervals add karo
    while (i < intervals.length) {
        result.push(intervals[i]);
        i++;
    }

    return result;
};