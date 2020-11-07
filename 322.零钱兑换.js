/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let dp = new Array(amount + 1).fill(Infinity)
    dp[0] = 0

    for (let n of coins) {
        for (let i = n; i <= amount; i++) {
            dp[i] = Math.min(dp[i], dp[i-n] + 1)
        }
    }

    // for (let i = 1; i <= amount; i++) {
    //     // let tmp = []
    //     for (let n of coins) {
    //         // if(i >= n && dp[i-n] != -1) tmp.push(dp[i-n]+1)
    //         dp[i] = Math.min(dp[i], dp[i-n] + 1)
    //     }
    //     // if (tmp.length > 0) dp[i] = Math.min(...tmp)
    //     // else dp[i] = -1
    // }
    return dp[amount] < Infinity ? dp[amount] : -1
};
// @lc code=end

