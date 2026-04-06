class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        // will move p2 till the end of the string char
        // while char at p2 is not present in the substring we keep adding char at p2
        // before moving p2 we calculate size of maxSubstring without reps
        // when we find a char we already had in the substring, we gotta move p1 until after the said char
        // instead of creating substring will try with a set for the elements in the string
        if (s === "") {
            return 0;
        }
        
        let set = new Set();
        let maxSubstring = 0;

        let p1 = 0;
        let p2 = 1;

        set.add(s.charAt(p1));
        maxSubstring = 1;

        while (p2 < s.length) {
            if (!set.has(s.charAt(p2))) {
                // char at p2 not there, we add it.
                set.add(s.charAt(p2));
                maxSubstring = Math.max(maxSubstring, set.size);
            } else {
                // char is there.. we gotta advance p1 till after the previous existance of this char,
                // removing from the set the chars before it
                while (s.charAt(p1) != s.charAt(p2)) {
                    set.delete(s.charAt(p1));
                    p1++;
                }
                // we found it, now we move p1 once more and leave the char as it is the one we adding on p2
                p1++;
                maxSubstring = Math.max(maxSubstring, set.size);
            }

            p2++;
        }

        return maxSubstring;
    }
}
