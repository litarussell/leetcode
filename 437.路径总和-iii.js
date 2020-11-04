/*
 * @lc app=leetcode.cn id=437 lang=javascript
 *
 * [437] 路径总和 III
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
 * @param {number} sum
 * @return {number}
 */
var pathSum1 = function(root, sum) {
    const find = function (node, sum) {
        if (!node) return 0
        if (sum === node.val) {
            let n1 = find(node.left, sum-node.val)
            let n2 = find(node.right, sum-node.val)
            return 1 + n1 + n2
        }
        
        let n1 = find(node.left, sum-node.val)
        let n2 = find(node.right, sum-node.val)
        return n1 + n2
    }
    const dfs = function(node, sum) {
        if (!node) return 0
        let n = find(node, sum)
        let n1 = dfs(node.left, sum)
        let n2 = dfs(node.right, sum)
        return n + n1 + n2
    }
    let ans = dfs(root, sum)
    return ans
};
// 双重递归
var pathSum2 = function(root, sum) {
    let count = 0
    const dfs = function(node, sum) {
        if (!node) return
        if (sum == node.val) count++
        dfs(node.left, sum-node.val)
        dfs(node.right, sum-node.val)
    }
    const solution = function(node, sum) {
        if (!node) return
        dfs(node, sum)
        solution(node.left, sum)
        solution(node.right, sum)
    }
    solution(root, sum)
    return count
}
// 前缀和 前n项和
// 如果当前 前缀和 - sum 在哈希表中有值, 即在当前路径中有前缀和的差 = sum, 说明在这两个节点之间的路径和 = sum
// 记录当前节点的前缀和之后, 就递归求
var pathSum3 = function(root, sum) {
    const dfs = function(node, sum, pathSum, hash) {
        if (!node) return 0
        pathSum += node.val
        let ans = (hash[pathSum-sum] || 0)
        hash[pathSum] = (hash[pathSum] || 0) + 1
        ans = dfs(node.left, sum, pathSum, hash) + dfs(node.right, sum, pathSum, hash) + ans
        hash[pathSum]--
        return ans
    }
    let hash = {0: 1}
    return dfs(root, sum, 0, hash)
}
// @lc code=end

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let root = new TreeNode(10)
root.left = new TreeNode(5)
root.left.left = new TreeNode(3)
root.left.left.left = new TreeNode(3)
root.left.left.right = new TreeNode(-2)
root.left.right = new TreeNode(2)
root.left.right.right = new TreeNode(1)

root.right = new TreeNode(-3)
root.right.right = new TreeNode(11)

pathSum3(root, 8)