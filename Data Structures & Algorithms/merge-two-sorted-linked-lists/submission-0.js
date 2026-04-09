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
        let newHead = null;

        // choose newHead
        if (p1.val < p2.val) {
            newHead = p1;
            p1 = p1.next;
        } else {
            newHead = p2;
            p2 = p2.next;
        }

        let np = newHead;

        while (p1 !== null && p2 !== null) {
            console.log("p1", p1);
            console.log("p2", p2);
            console.log("np", np);
            
            if (p1.val < p2.val) {
                np.next = p1;
                p1 = p1.next;
                np = np.next;
            } else {
                np.next = p2;
                p2 = p2.next;
                np = np.next;
            }
        }  

        // do not forget bout the extra elements on the list that was not null
        if (p1 !== null) {
            np.next = p1;
        } else {
            np.next = p2;
        }

        return newHead;
    }
}
