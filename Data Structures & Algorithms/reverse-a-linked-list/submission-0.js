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
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        // covering empty list or just one element list
        if (head === null || head.next == null) {
            return head;
        }

        let aux = head;
        let prev = null;
        let next = aux.next;

        
        while (aux.next != null) {
            aux.next = prev;
            prev=aux;
            aux=next;
            next=next.next;
        }

        // we are at the end of the list;
        aux.next = prev;
        head = aux;
        
        return head;

    }
}
