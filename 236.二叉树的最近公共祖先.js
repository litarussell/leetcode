/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

// var lowestCommonAncestor = function (root, p, q) {
// 	function find(h1, p) {
// 		let i = 1
// 		while (h1) {
// 			if (p == h1.val) break
// 			else if (p < h1.val) {
// 				i *= 2
// 				h1 = h1.left
// 			} else {
// 				i = i * 2 + 1
// 				h1 = h1.right
// 			}
// 		}
// 		return i
// 	}

// 	function check(m, n) {
// 		let d = Math.abs(m - n)
// 		if (d == 0) return m
// 		if (d == 1) return (m > n ? n : m) >> 1
// 		if (m > n) return check(m >> 1, n)
// 		else return check(m, n >> 1)
// 	}
// 	let m = find(root, p)
// 	let n = find(root, q)
// 	let re = check(m, n)
// 	let stack = [],
// 		i = 1
// 	let h = null
// 	stack.push(root)
// 	while (stack.length > 0 && i <= re) {
// 		h = stack.shift()
// 		if (h) {
// 			stack.push(h.left)
// 			stack.push(h.right)
// 		}
// 		i++
// 	}
// 	return h
// };

// hash表存储p q的父节点
var lowestCommonAncestor1 = function (root, p, q) {
	let hash = {}, visual = {}
	const dfs = function(node) {
		if (node.left) {
			hash[node.left.val] = node
			dfs(node.left)
		}
		if (node.right) {
			hash[node.right.val] = node
			dfs(node.right)
		}
	}
	hash[root.val] = null
	dfs(root)
	while (p) {
		visual[p.val] = true
		p = hash[p.val]
	}
	while (q) {
		if (visual[q.val]) return q
		q = hash[q.val]
	}
	return null
}

// 递归 后序遍历
var lowestCommonAncestor2 = function (root, p, q) { 
	let ans = null
	const dfs = function(node, p, q) {
		if (!node) return false
		let left = dfs(node.left, p, q)
		let right = dfs(node.right, p, q)
		let cur = node.val == p.val || node.val == q.val
		if ((left && right) || (cur && (left || right))) {
			ans = node
		} 
		return left || right || cur
	}
	dfs(root, p, q)
	return ans
}

// @lc code=end
const tools = require('./tools')
let root = tools.buildBinaryTree([3,5,1,6,2,0,8,null,null,7,4])

lowestCommonAncestor(root, 5, 1)