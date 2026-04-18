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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let pre = new ListNode();
        pre.next = head;

        let fast = head;
        let slow = pre;

        // we create the gap between pre delete and the end of the list ( null)
        // we advance fast n positions - we have slow one before the head - so the space between them would be
        let moves = 0;
        while (fast !== null && moves < n) {
            fast = fast.next;
            moves++;
        }

        // now both move at the same speed and we stop when cur got to the end.
        while (fast != null) {
            fast = fast.next;
            slow = slow.next;
        }

        // now slow is properly positioned one element before the nth we need to remove, we remove it 
        slow.next = slow.next.next;

        // we have a pointer to the pre head
        return pre.next;
    }
}



