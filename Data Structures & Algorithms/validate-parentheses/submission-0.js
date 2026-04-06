class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        //go over string. 
        // if opening - add to the stack - last position on the array
        //if closed, we pop one from stack ( last postion too)
        // if closing matches opening - we need a map to map openers to closers - do nothing
        // if it does not match return false; the stack could be empty so we got extra closers... fails too

        // if we got to the end and stack has more openers... we fails

        const openClose = new Map();
        openClose.set('(', ')');
        openClose.set('[', ']');
        openClose.set('{','}');

        const openers = new Set([...openClose.keys()]);

        const stack = [];

        for (let i = 0; i < s.length; i++) {
            if (openers.has(s[i])) {
                stack.push(s[i]);
            } else {
                // its a closer
                const topStack = stack.pop();

                if (openClose.get(topStack) != s[i]) {
                    return false;
                }
            }
        }

        if (stack.length !== 0) {
            //extra opener
            return false;
        }

        return true;

    }
}
