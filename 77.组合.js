/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    const dfs = function (num, size, path, ans) {
        if (size === k) {
            ans.push([...path])
            return
        }
        for (let i = num; i <= n; i++) {
            path.push(i)
            dfs(i + 1, size + 1, path, ans)
            path.pop()
        }
    }
    let ans = []
    dfs(1, 0, [], ans)
    return ans
};
// @lc code=end

// combine(4, 2)