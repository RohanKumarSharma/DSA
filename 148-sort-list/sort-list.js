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
var sortList = function(head) {
    let arr = [];
    let current = head;

    while (current !== null) {
        arr.push(current.val);
        current = current.next;
    }

    arr.sort((a, b) => a - b);

    current = head;
    let i = 0;

    while (current !== null) {
        current.val = arr[i];
        i++;
        current = current.next;
    }

    return head;
};