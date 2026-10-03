/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let slow = head;
    let fast = head;

    // 1. Find middle
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // 2. Reverse second half
    let prev = null;

    while (slow !== null) {
        let next = slow.next;
        slow.next = prev;
        prev = slow;
        slow = next;
    }

    // 3. Compare first half and reversed second half
    let left = head;
    let right = prev;

    while (right !== null) {
        if (left.val !== right.val) {
            return false;
        }

        left = left.next;
        right = right.next;
    }

    return true;
};