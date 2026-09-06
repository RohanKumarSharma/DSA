/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let values = [];

    // Saare nodes ki values array mein store karo
    for (let list of lists) {
        let current = list;

        while (current !== null) {
            values.push(current.val);
            current = current.next;
        }
    }

    // Values ko sort karo
    values.sort((a, b) => a - b);

    // Empty case
    if (values.length === 0) {
        return null;
    }

    // Linked list banao
    let dummy = new ListNode(0);
    let current = dummy;

    for (let value of values) {
        current.next = new ListNode(value);
        current = current.next;
    }

    return dummy.next;
};