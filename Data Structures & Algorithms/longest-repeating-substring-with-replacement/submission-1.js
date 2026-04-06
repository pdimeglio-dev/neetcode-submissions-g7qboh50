class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        if (s.length === 1) {
            return 1;
        }
        let max = 0;
        let start = 0;
        let end = 1;

        const map = new Map(); // count char occurrences, we could also use a char array of 26 given its only uppercases
        map.set(s[start], 1);

        while (end < s.length) {
            // we add the new char to the set
            map.set(s[end], (map.get(s[end]) ?? 0) + 1);

            let windowSize = end - start + 1;
            let replacementsNeeded = windowSize - map.get(this.getMostFrequentChar(map));

            while(replacementsNeeded > k) {
                map.set(s[start], map.get(s[start]) -1);
                start++;

                windowSize = end - start + 1;
                replacementsNeeded = windowSize - map.get(this.getMostFrequentChar(map));
            }
            //otherwise we can calculate the new max and keep iterating
            max = Math.max(max, windowSize);
            end++;
        }

        return max;
    }

    getMostFrequentChar(map) {
        const maxEntry = [...map.entries()].reduce((max, entry) => {
            return entry[1] > max[1] ? entry : max; // Added the return keyword!
        });

        return maxEntry[0];
    }

}
