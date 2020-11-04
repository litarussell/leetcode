/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    const dfs = function (nums, index, sum, path, ans) {
        if (sum === target) {
            ans.push([...path])
            return
        }
        for (let i = index; i < nums.length; i++) {
            let num = sum + nums[i]
            if (num > target) break
            if (i > index && nums[i] == nums[i-1]) continue
            path.push(nums[i])
            dfs(nums, i+1, num, path, ans)
            path.pop()
        }
    }
    let ans = []
    if (candidates.length == 0) return ans
    candidates.sort((a,b) => a-b)
    dfs(candidates, 0, 0, [], ans)
    return ans
};
// @lc code=end

// let candidates = [10,1,2,7,6,1,5], target = 8
// combinationSum2(candidates, target)