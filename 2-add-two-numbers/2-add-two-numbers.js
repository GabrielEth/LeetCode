/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
let addTwoNumbers = function(l1, l2) {
    let answer = new ListNode();
    let head = answer;
    let remainder = 0;
    let temp = answer
    let curr1 = l1;
    let curr2 = l2;
    while(curr1 || curr2) {
        if(!curr2) curr2 = new ListNode();
        if(!curr1) curr1 = new ListNode();
        if(curr1.val + curr2.val + remainder > 9){
            
            temp.val = (curr1.val + curr2.val + remainder)% 10;
            remainder = 1
            temp.next = new ListNode();
            temp = temp.next;
            if(temp.val === 0)temp.val =1;
            curr1 = curr1.next;
            curr2 = curr2.next;
            
        }else{
            temp.val = curr1.val + curr2.val + remainder;
            
            curr1 = curr1.next;
            curr2 = curr2.next;
            if(curr1 || curr2){ 
                temp.next = new ListNode();
            }
             temp = temp.next;
            remainder = 0;
        }
    }
    return head;
};