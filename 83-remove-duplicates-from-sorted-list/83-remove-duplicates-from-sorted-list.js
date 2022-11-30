/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
let deleteDuplicates = function(head) {
    
    
    if(head == null) return head;
    if(head.next == null) return head
    let left = head;
    let right = head.next;
    while(right != null)
    if(left.val === right.val){
        left.next = right.next;
        right.next = null;
        right = left.next
    }else {
    left = left.next;
    right = right.next;
    }
    return head;
};