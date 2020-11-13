/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 *
 * https://leetcode-cn.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (26.04%)
 * Likes:    1054
 * Dislikes: 0
 * Total Accepted:    78.8K
 * Total Submissions: 302.2K
 * Testcase Example:  '"babad"'
 *
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 * 
 * 示例 1：
 * 
 * 输入: "babad"
 * 输出: "bab"
 * 注意: "aba" 也是一个有效答案。
 * 
 * 
 * 示例 2：
 * 
 * 输入: "cbbd"
 * 输出: "bb"
 * 
 * 
 */
/**
 * @param {string} s
 * @return {string}
 */
// 动态规划 dp[i, j] 表示字符串索引从 i 到 j 的子串是否是回文串

var longestPalindrome = function (s) {
	let n = s.length
	if (n <= 1) return s
	let count = (n * (n - 1)) / 2 + n
	let dp = new Array(count).fill(0)
	let sum = 0, str = ''

	for (let j = 0; j < n; j++) {
		for (let i = 0; i <= j; i++) {
			let index = (j - 1) * j / 2 + i + 1 // dp[i + 1, j - 1]
			if (s[i] === s[j] && (j - i <= 2 || dp[index])) {
				dp[j * (j + 1) / 2 + i] = 1
				if (j - i + 1 >= sum) {
					sum = j - i + 1
					str = s.slice(i, j + 1)
				}
			}
		}
	}
	return str
};

