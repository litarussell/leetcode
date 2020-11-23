/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长上升子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS1 = function(nums) {
    let dp = new Array(nums.length).fill(0)
    dp[0] = 1
    let max = 1
    for (let i = 1; i < nums.length; i++) {
        let j = i
        while (j > 0) {
            if (nums[--j] < nums[i])
                dp[i] = Math.max(dp[j], dp[i])
        }
        dp[i] += 1
        max = Math.max(dp[i], max)
    }
    return max
};

// @lc code=end

lengthOfLIS([10,9,2,5,3,7,101,18])