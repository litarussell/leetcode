/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 *
 * https://leetcode-cn.com/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (71.10%)
 * Likes:    454
 * Dislikes: 0
 * Total Accepted:    31.5K
 * Total Submissions: 44.3K
 * Testcase Example:  '3'
 *
 * 给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。
 * 
 * 例如，给出 n = 3，生成结果为：
 * 
 * [
 * ⁠ "((()))",
 * ⁠ "(()())",
 * ⁠ "(())()",
 * ⁠ "()(())",
 * ⁠ "()()()"
 * ]
 * 
 * 
 */
/**
 * 
 * 状态变量: 左括号数 右括号数
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let re = []
    if (n <= 0) return re
    backtrack(re, 0, 0, '', n)
    return re
};
/**
 * 回溯法
 * @param {*} re 结果集
 * @param {*} open 左括号数量
 * @param {*} close 右括号数量
 * @param {*} cur 当前结果
 * @param {*} n 闭合括号数量
 */
function backtrack(re, open, close, cur, n) {
    if (close === n) {
        re.push(cur)
        return
    }
    // 左括号数量小于指定数量 则可以添加左括号
    if (open < n) backtrack(re, open + 1, close, cur + '(', n)
    // 右括号小于左括号数量 则可以添加一个左括号
    if (close < open) backtrack(re, open, close + 1, cur + ')', n)
}

