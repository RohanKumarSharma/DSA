/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
     if (t.length > s.length) {
        return "";
    }

    let need = new Map();

    // t ke characters ki frequency
    for (let char of t) {
        need.set(char, (need.get(char) || 0) + 1);
    }

    let window = new Map();

    let left = 0;
    let required = t.length;
    let minLength = Infinity;
    let start = 0;

    for (let right = 0; right < s.length; right++) {
        let char = s[right];

        if (need.has(char)) {
            window.set(char, (window.get(char) || 0) + 1);

            if (window.get(char) <= need.get(char)) {
                required--;
            }
        }

        // Window valid hai
        while (required === 0) {
            let length = right - left + 1;

            if (length < minLength) {
                minLength = length;
                start = left;
            }

            let leftChar = s[left];

            if (need.has(leftChar)) {
                window.set(
                    leftChar,
                    window.get(leftChar) - 1
                );

                if (window.get(leftChar) < need.get(leftChar)) {
                    required++;
                }
            }

            left++;
        }
    }

    if (minLength === Infinity) {
        return "";
    }

    return s.substring(start, start + minLength);
};