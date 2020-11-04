/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * 在树形问题的dfs中剪枝:
 * 对nums排序, 每次填入到路径中的数是从左往右第一个未被填充的数字
 * 否则就不填入. (i > 0 && arr[i] == arr[i-1] && !used[i-1])
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    nums.sort((a, b) => a - b)
    const dfs = function (arr, depth, n, used, path, ans) {
        if (depth == n) {
            ans.push([...path])
            return
        }
        for (let i = 0; i < n; i++) {
            if (used[i] || (i > 0 && arr[i] == arr[i - 1] && !used[i - 1])) continue
            used[i] = true
            path.push(arr[i])
            dfs(arr, depth + 1, n, used, path, ans)
            path.pop()
            used[i] = false
        }
    }
    let ans = [],
        used = new Array(nums.length).fill(false)
    dfs(nums, 0, nums.length, used, [], ans)
    return ans
};
// @lc code=end

// permuteUnique([1,2,1])