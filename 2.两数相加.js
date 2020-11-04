/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 相加、相乘都是模拟数学运算, 注意进位
 * 一般用于大数相加相乘
 * 相似题目：43
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let carry = 0
    let sum = 0
    let p1 = l1
    let p2 = l2
    let re = new ListNode(0)
    let head = re
    while(p1 !== null || p2 !== null || sum > 0) {
        if (p1 !== null) {
            sum += p1.val
            p1 = p1.next
        }
        if (p2 !== null) {
            sum += p2.val
            p2 = p2.next
        }
        if (sum >= 10) {
            carry = 1
            sum -= 10
        }
        head.next = new ListNode(sum)
        head = head.next

        sum = carry
        carry = 0
    }
    return re.next
};

