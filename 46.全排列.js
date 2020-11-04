/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 *
 * https://leetcode-cn.com/problems/permutations/description/
 *
 * algorithms
 * Medium (70.78%)
 * Likes:    349
 * Dislikes: 0
 * Total Accepted:    38.5K
 * Total Submissions: 54.1K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个没有重复数字的序列，返回其所有可能的全排列。
 * 
 * 示例:
 * 
 * 输入: [1,2,3]
 * 输出:
 * [
 * ⁠ [1,2,3],
 * ⁠ [1,3,2],
 * ⁠ [2,1,3],
 * ⁠ [2,3,1],
 * ⁠ [3,1,2],
 * ⁠ [3,2,1]
 * ]
 * 
 */
/**
 * 回溯算法模板:
 * 在一个树形问题上做dfs, 搜索所有的可能的解
 * 状态变量: used, path, depth
 * 
 * 类似的题:  47全排列(2) 17电话号码的字母组合  22括号生成  51N皇后 60第k个排列 784字母大小写全排列
 *           39组合总和  40组合总和(2)   78子集  79子集(2)   93复原IP地址 
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    if (nums.length === 0) return []
    let path = [],
        ans = []
    let used = new Array(nums.length).fill(false)
    const dfs = function (arr, depth, n, used, path, ans) {

        if (depth == n) {
            ans.push([...path])
            return
        }

        for (let i = 0; i < arr.length; i++) {
            if (used[i]) continue
            used[i] = true
            path.push(arr[i])
            dfs(arr, depth + 1, n, used, path, ans)
            path.pop()
            used[i] = false
        }
    }
    dfs(nums, 0, nums.length, used, path, ans)
    return ans
};

// permute([1,2,3])