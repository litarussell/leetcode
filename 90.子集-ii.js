/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    const dfs = function (index, path, ans) {
        ans.push([...path])
        for (let i = index; i < nums.length; i++) {
            if (i > index && nums[i] == nums[i-1]) continue
            path.push(nums[i])
            dfs(i+1, path, ans)
            path.pop()
        }
    }
    let ans = []
    nums.sort((a, b) => a - b)
    dfs(0, [], ans)
    return ans
};
// @lc code=end

// subsetsWithDup([1,2,2])