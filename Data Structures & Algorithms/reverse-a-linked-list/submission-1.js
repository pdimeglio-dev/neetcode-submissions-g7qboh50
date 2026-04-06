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
        let aux = head;
        let prev = null;
        
        while (aux != null) {
            let next = aux.next;
            aux.next = prev;
            prev=aux;

            aux=next;
        }
        
        return prev;

    }
}
