class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let set = new Set(nums);

        // the set would remove duplicates so if nums length is different to set size we found duplicates
        return set.size !== nums.length;

    }
}
