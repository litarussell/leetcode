/*
 * @lc app=leetcode.cn id=494 lang=javascript
 *
 * [494] 目标和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays1 = function(nums, S) {
    let ans = 0, len = nums.length
    let path = [], re = []
    const dfs = function(n, sum) {
        if (path.length == len) {
            if (sum == S) {
                ans+=1
                re.push([...path])
            }
            return
        }
        for (let i = n; i < len; i++) {
            path.push('+')
            dfs(i+1, sum + nums[i])
            path.pop()
            path.push('-')
            dfs(i+1, sum - nums[i])
            path.pop()
        }
    }
    dfs(0, 0)
    return ans
};

var findTargetSumWays2 = function(nums, S) {
    let ans = 0, len = nums.length
    const dfs = function(n, sum) {
        if (n == len) {
            if (sum == S) {
                ans+=1
            }
            return
        }
        dfs(n+1, sum + nums[n])
        dfs(n+1, sum - nums[n])
    }
    dfs(0, 0)
    return ans
};

// 转换为0-1背包
// 正数集合 + 负数集合 = 目标和
// 2*正数集合 = 目标和 + 序列和
// 转换为在序列中找一个集合, 其和的2倍 = 目标和 + 序列和
var findTargetSumWays3 = function(nums, S) {
    let sum = nums.reduce((a, b) => a + b)
    if (sum < S || (sum + S) & 1) return 0
    let target = (sum + S) >> 1
    let dp = new Array(target + 1).fill(0)
    dp[0] = 1
    for (let n of nums) {
        for (let i = target; i >= n; i--) {
            dp[i] += dp[i - n]
        }
    }
    return dp[target]
};
// @lc code=end

findTargetSumWays2([1, 1, 1, 1, 1], 3)