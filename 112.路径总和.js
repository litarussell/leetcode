/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum1 = function(root, sum) {
    if (!root) return false
    const dfs = function(root, sum) {
        let left = false, right = false
        if (!root.left && !root.right) return sum === root.val
        if (root.left) left = dfs(root.left, sum - root.val)
        if (root.right) right = dfs(root.right, sum - root.val)
        return left || right
    }
    return dfs(root, sum)
};
var hasPathSum2 = function(root, sum) {
    if (!root) return false
    if (!root.left && !root.right) return root.val === sum
    return hasPathSum(root.left, sum-root.val) || hasPathSum(root.right, sum-root.val)
};

// @lc code=end

// function TreeNode(val) {
//     this.val = val;
//     this.left = this.right = null;
// }

// let root = new TreeNode(1)
// root.left = new TreeNode(2)
// root.left.left = new TreeNode(3)
// root.left.left.left = new TreeNode(4)
// root.left.left.left.left = new TreeNode(5)
// hasPathSum(root, 6)