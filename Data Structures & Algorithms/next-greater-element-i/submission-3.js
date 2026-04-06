class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    nextGreaterElement(nums1, nums2) {
        const nextGreaters = new Map();
        const stack = [];
                
        for (let i =0; i < nums2.length; i++) {
            while (stack.length > 0 && nums2[i] > stack[stack.length -1]) {
                let popEl = stack.pop();
                nextGreaters.set(popEl, nums2[i]);
            }
            stack.push(nums2[i]);
        }

        return nums1.map((num) => nextGreaters.get(num) || -1 );
    }
}
