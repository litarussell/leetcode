/*
 * @lc app=leetcode.cn id=328 lang=javascript
 *
 * [328] 奇偶链表
 */

// @lc code=start
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
var oddEvenList = function(head) {
    if (!head) return null
    let p1 = head, p2 = head.next, h = p2
    while (p2 && p2.next) {
        p1.next = p2.next
        p1 = p1.next
        p2.next = p1.next
        p2 = p2.next
    }
    p1.next = h
    return head
};
// @lc code=end

const tools = require('./tools')
let node = tools.buildLinkList([1,2,3,4,5,6])
oddEvenList(node)
node = tools.buildLinkList([1,2])
oddEvenList(node)
node = tools.buildLinkList([1])
oddEvenList(node)