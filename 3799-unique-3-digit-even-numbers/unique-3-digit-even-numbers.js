/**
 * @param {number[]} digits
 * @return {number}
 */
var totalNumbers = function(digits) {
    let count = Array(10).fill(0);
    let result = new Set();

    // Har digit ki frequency count karo
    for (let digit of digits) {
        count[digit]++;
    }

    // Hundreds digit
    for (let i = 1; i <= 9; i++) {
        if (count[i] === 0) continue;

        // Tens digit
        for (let j = 0; j <= 9; j++) {
            if (count[j] === 0) continue;

            // Units digit - even hona chahiye
            for (let k = 0; k <= 8; k += 2) {
                if (count[k] === 0) continue;

                // Digit ki copies enough hain ya nahi
                count[i]--;
                count[j]--;
                count[k]--;

                if (count[i] >= 0 && count[j] >= 0 && count[k] >= 0) {
                    let number = i * 100 + j * 10 + k;
                    result.add(number);
                }

                // Original frequency wapas restore karo
                count[i]++;
                count[j]++;
                count[k]++;
            }
        }
    }

    return result.size;
};