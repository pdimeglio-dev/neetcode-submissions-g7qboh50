class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // anagrams are 2 words that have the same letters, same amount for each in different order
        // all anagrams would share the same " key" if we sorted them.
        //act === act, cat === act 
        // what we can do is iterate on the strings array and calculate the key for each
        // in a map we store key to array of words that share that key
        // so for a word we generate key, check if it is present in the map, if not we store a new array with the current word
        if (strs.lenght === 0) return [];

        const anagrams = new Map();
        for (const s of strs) {
            const key = s.split('').sort().join('');

            if (anagrams.has(key)) {
                const anagramsGroup = [
                    ...anagrams.get(key),
                    s
                ];
                anagrams.set(key, anagramsGroup);
            } else {
                anagrams.set(key, [s]);
            }
        }

        const groups = [];

        for (const k of anagrams.keys()) {
            groups.push(anagrams.get(k));
        }

        return groups;
    }
}
