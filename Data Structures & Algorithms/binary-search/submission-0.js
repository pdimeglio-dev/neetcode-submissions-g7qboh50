class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        if (nums.length === 1) {
            return nums[0] === target ? 0 : -1;
        }

        let start = 0;
        let end = nums.length - 1;
        
        while (start < end) {
            let mid = Math.floor(start + (end - start)/2);

            if (nums[mid] === target) {
                return mid;
            }

            if (nums[mid] > target) {
                end = mid -1;
            } else {
                start = mid + 1;
            }
        }

        return nums[start] === target ? start : -1;
    }
}
