/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    mergeRec(p1, p2) {
        if (p1 === null) return p2;
        if (p2 === null) return p1;

        if (p1.val < p2.val) {
            p1.next = this.mergeRec(p1.next, p2);
            return p1;
        } else {
            p2.next = this.mergeRec(p1, p2.next);
            return p2;
        } 
    }

    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let p1 = list1;
        let p2 = list2;

        return this.mergeRec(p1, p2);
    }
}
