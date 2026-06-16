class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // we can have 2 pointers, one to the end and one to the start
        // at every iteration we check whether any of them points to a char different than A-Z, az
        // we increase start or decrease end one position per loop
        //only when both are ! special char we compare...
        // as soon as we find differences we exit
        // otherwise true
        const isAlphanumeric = char => /^[a-zA-Z0-9]$/.test(char);

        let start = 0;
        let end = s.length - 1;

        while (start < end) {
            const startC = s.charAt(start);
            const endC = s.charAt(end);

            if (isAlphanumeric(startC) && isAlphanumeric(endC)) {
                if (startC.toLowerCase() !== endC.toLowerCase()) {
                    return false;
                }
                start++;
                end--;
                continue;
            }

            if (!isAlphanumeric(startC)) {
                start++;
            }

            if (!isAlphanumeric(endC)) {
                end--;
            }
        }
        return true;
    }
}
