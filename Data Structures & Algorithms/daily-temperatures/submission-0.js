class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        // All 0 by default
        const daysTillWarmer = Array.from({length : temperatures.length}).fill(0);
        const stack = [];

        for (let i = 0; i < temperatures.length; i++) {
            //go over the stack and process and remove all items si for which t[si] < t[i]
            while (stack.length >0 && temperatures[i] > temperatures[stack[stack.length -1]]) {
                const popElIndex = stack.pop();
                const time = i - popElIndex;

                daysTillWarmer[popElIndex] = time;
            }

            stack.push(i);
        }

        return daysTillWarmer;
    }
}
