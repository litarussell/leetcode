/*
 * @lc app=leetcode.cn id=518 lang=javascript
 *
 * [518] 零钱兑换 II
 */

// @lc code=start
/**
 * dp[i]表示凑成金额i的组合方案数
 * dp[i] = sum(dp[i-c1], dp[i-c2], ...)
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    let dp = new Array(amount+1).fill(0)
    dp[0] = 1
    for (let n of coins) {
        for (let i = n; i <= amount; i++) {
            dp[i] += dp[i-n]
        }
    }
    console.log(dp)
    return dp[amount]
};

// 错误
var change1 = function(amount, coins) {
    let dp = new Array(amount+1).fill(0)
    dp[0] = 1
    for (let i = 1; i <= amount; i++) {
        for (let n of coins) {
            if (i >= n) {
                dp[i] += dp[i-n]
            }
        }
    }
    // for (let n of coins) {
    //     for (let i = n; i <= amount; i++) {
    //         dp[i] += dp[i-n]
    //     }
    // }
    return dp[amount]
};
// @lc code=end

change(5, [1,2,5])
change1(5, [1,2,5])