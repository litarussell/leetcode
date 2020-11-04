/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * 该题需要找到所有路径和=sum的路径
 * 可以用回溯
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
// var pathSum = function(root, sum) {
//     if (!root) return []
//     const dfs = function(node, sum, path, ans) {
//         if (!node) {
//             if (sum == 0) ans.push([...path])
//             return
//         }
//         path.push(node.val)
//         if (!node.left && !node.right && sum == node.val) {
//             ans.push([...path])
//             path.pop()
//             return
//         }
//         if (node.left) dfs(node.left, sum-node.val, path, ans)
//         if (node.right) dfs(node.right, sum-node.val, path, ans)
//         path.pop()
//     }
//     let ans = []
//     dfs(root, sum, [], ans)
//     return ans
// };

var pathSum = function(root, sum) {
    if (!root) return []
    const dfs = function(node, sum, path, ans) {
        if (!node) return
        path.push(node.val)
        if (!node.left && !node.right && sum == node.val) {
            ans.push([...path])
            path.pop()
            return
        }
        dfs(node.left, sum-node.val, path, ans)
        dfs(node.right, sum-node.val, path, ans)
        path.pop()
    }
    let ans = []
    dfs(root, sum, [], ans)
    return ans
};
// @lc code=end

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let root = new TreeNode(5)
root.left = new TreeNode(4)
root.left.left = new TreeNode(11)
root.left.left.left = new TreeNode(7)
root.left.left.right = new TreeNode(2)

root.right = new TreeNode(8)
root.right.left = new TreeNode(13)
root.right.right = new TreeNode(4)
root.right.right.left = new TreeNode(5)
root.right.right.right = new TreeNode(1)

pathSum(root, 22)