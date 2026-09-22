/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let mapST = new Map();
    let mapTS = new Map();

    for (let i = 0; i < s.length; i++) {
        let a = s[i];
        let b = t[i];

        // s -> t
        if (mapST.has(a) && mapST.get(a) !== b) {
            return false;
        }

        // t -> s
        if (mapTS.has(b) && mapTS.get(b) !== a) {
            return false;
        }

        mapST.set(a, b);
        mapTS.set(b, a);
    }

    return true;
};