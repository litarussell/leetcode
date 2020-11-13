/*
 * @lc app=leetcode.cn id=687 lang=javascript
 *
 * [687] 最长同值路径
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var longestUnivaluePath = function(root) {
    if (!root) return 0
    let ans = 0
    const dfs = function(node) {
        if (!node) return 0
        let l = dfs(node.left)
        let r = dfs(node.right)
        let left = 0, right = 0
        if (node.left && node.val == node.left.val) {
            left = l + 1
        }
        if (node.right && node.val == node.right.val) {
            right = r + 1
        }
        ans = Math.max(ans, left + right)
        return Math.max(left, right)
    }
    dfs(root)
    return ans
};
// @lc code=end

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
let root = new TreeNode(1)
root.right = new TreeNode(1)
root.right.left = new TreeNode(1)
root.right.left.left = new TreeNode(1)
root.right.left.right = new TreeNode(1)

root.right.right = new TreeNode(1)
root.right.right.left = new TreeNode(1)

longestUnivaluePath(root)