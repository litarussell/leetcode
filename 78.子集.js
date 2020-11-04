/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    const dfs = function (index, path, ans) {
        ans.push([...path])
        for (let i = index; i < nums.length; i++) {
            path.push(nums[i])
            dfs(i + 1, path, ans)
            path.pop()
        }
    }
    let ans = []
    dfs(0, [], ans)
    return ans
};
// @lc code=end

// subsets([1,2,3])