class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    nextGreaterElement(nums1, nums2) {
        const nextGreaters = new Map();
        const stack = [];

        const retArray = Array.from({length: nums1.length}).fill(-1);    
        
        for (let i =0; i < nums2.length; i++) {
            while (stack.length > 0 && nums2[i] > stack[stack.length -1]) {
                let popEl = stack.pop();
                nextGreaters.set(popEl, nums2[i]);
            }
            stack.push(nums2[i]);
        }

        for (let i = 0; i < nums1.length; i++) {
            if (nextGreaters.has(nums1[i])) {
                retArray[i] = nextGreaters.get(nums1[i]);
            }
        }

        return retArray;
    }
}
