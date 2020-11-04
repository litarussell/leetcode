/*
 * @lc app=leetcode.cn id=445 lang=javascript
 *
 * [445] 两数相加 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let s1 = [], s2 = []
    let p1 = l1, p2 = l2
    while (p1) {
        s1.push(p1.val)
        p1 = p1.next
    }
    while (p2) {
        s2.push(p2.val)
        p2 = p2.next
    }
    let ans = new ListNode(null), carry = 0
    while (s1.length > 0 || s2.length > 0) {
        let n = 0
        if (s1.length > 0) n += s1.pop()
        if (s2.length > 0) n += s2.pop()
        n += carry
        if (n < 10) carry = 0
        else {
            carry = Math.floor(n / 10)
            n = n % 10
        }
        let node = new ListNode(n)
        node.next = ans.next
        ans.next = node
    }
    if (carry > 0) {
        let node = new ListNode(carry)
        node.next = ans.next
        ans.next = node
    }
    return ans.next
};
// @lc code=end

// function ListNode(val) {
//     this.val = val;
//     this.next = null;
// }
// let l1 = new ListNode(5)
// l1.next = new ListNode(2)
// l1.next.next = new ListNode(4)
// l1.next.next.next = new ListNode(3)

// let l2 = new ListNode(5)
// l2.next = new ListNode(6)
// l2.next.next = new ListNode(4)

// addTwoNumbers(l1, l2)