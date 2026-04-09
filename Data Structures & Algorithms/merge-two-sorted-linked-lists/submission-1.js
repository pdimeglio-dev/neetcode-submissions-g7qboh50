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
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        if (list1 === null) return list2;
        if (list2 === null) return list1;
        
        let p1 = list1;
        let p2 = list2;
        // dummy node will be the pre new head node.
        let dummyNode = new ListNode(0, null);
        let currentDummy = dummyNode;

        while (p1 !== null && p2 !== null) {
            if (p1.val < p2.val) {
                currentDummy.next = p1;
                p1 = p1.next;
                currentDummy = currentDummy.next;
            } else {
                currentDummy.next = p2;
                p2 = p2.next;
                currentDummy = currentDummy.next;
            }
        }  

        // do not forget bout the extra elements on the list that was not null
        if (p1 !== null) {
            currentDummy.next = p1;
        } else {
            currentDummy.next = p2;
        }

        return dummyNode.next;
    }
}
