class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();

        for (let i = 0; i < nums.length; i++) {
            if (map.has(nums[i])) {
                return [i, map.get(nums[i])];
            } else {
                let complement = target - nums[i];
                map.set(complement, i);
            }
        }

        return [];
    }
}
