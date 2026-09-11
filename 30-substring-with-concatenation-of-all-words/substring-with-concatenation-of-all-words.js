/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
     let result = [];

    let wordLength = words[0].length;
    let wordCount = words.length;
    let totalLength = wordLength * wordCount;

    // words ki frequency
    let wordMap = new Map();

    for (let word of words) {
        wordMap.set(word, (wordMap.get(word) || 0) + 1);
    }

    // Different starting positions check karo
    for (let start = 0; start < wordLength; start++) {
        let left = start;
        let count = 0;
        let currentMap = new Map();

        for (let right = start; right + wordLength <= s.length; right += wordLength) {

            let word = s.substring(right, right + wordLength);

            // Word list mein nahi hai
            if (!wordMap.has(word)) {
                currentMap.clear();
                count = 0;
                left = right + wordLength;
                continue;
            }

            // Current window mein word add karo
            currentMap.set(word, (currentMap.get(word) || 0) + 1);
            count++;

            // Kisi word ki frequency allowed se zyada ho gayi
            while (currentMap.get(word) > wordMap.get(word)) {
                let leftWord = s.substring(left, left + wordLength);

                currentMap.set(
                    leftWord,
                    currentMap.get(leftWord) - 1
                );

                left += wordLength;
                count--;
            }

            // Sabhi words mil gaye
            if (count === wordCount) {
                result.push(left);

                // Window ko aage move karo
                let leftWord = s.substring(left, left + wordLength);

                currentMap.set(
                    leftWord,
                    currentMap.get(leftWord) - 1
                );

                left += wordLength;
                count--;
            }
        }
    }

    return result;
};