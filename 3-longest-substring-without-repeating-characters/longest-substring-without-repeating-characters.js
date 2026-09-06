/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let set = new Set();

    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {

        // Duplicate hai to left ko aage badhao
        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }

        // Current character add karo
        set.add(s[right]);

        // Window ki length
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};