/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 * [1] = [1]
 * [3,4] = [3,4]
 * [3,4,5] = [3,5,4]
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
[1,2,3]
[6,5,4]
[1,6,2,5,3,4]
     */
    reorderList(head) {
        let fast = head;
        let slow = head;
        while(fast.next && fast.next.next){
            slow = slow.next
            fast = fast.next.next
        }
        
        let prev = null;
        let curr = slow.next;
        slow.next = null;
        while (curr) {
            const next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        
        while(head && prev){
            const temp1 = head.next;
            const temp2 = prev.next;
            head.next = prev;
            prev.next = temp1;
            head = temp1;
            prev = temp2;
        }
    }
}
