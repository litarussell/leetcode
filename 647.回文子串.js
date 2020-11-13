/*
 * @lc app=leetcode.cn id=647 lang=javascript
 *
 * [647] 回文子串
 */

// @lc code=start
/**
 * 注意dp的运算顺序, dp[i][j] = s[i] == s[j] && dp[i+1][j-1]
 * dp[i][j] 依赖于dp[i+1][j-1]的状态 dp[i+1][j-1]需要先计算
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let n = s.length
    let dp = new Array((n*(n+1)) >> 1).fill(false)
    let ans = 0
    for (let i = 0; i < n; i++) {
        dp[i*(i+1)/2 + i] = true
        ans += 1
    }
    
    for (let j = 0; j < n; j++) {
        for (let i = 0; i < j; i++) {
            if (s[i] == s[j] && (j-i <= 2 || dp[j*(j-1)/2+i+1])) {
                dp[j * (j+1) / 2 + i] = true
                ans += 1
            }
        }
    }
    show(dp, n)
    return ans
};
// @lc code=end

countSubstrings("aaaaa")

function show(arr, n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(`[${i}, ${j}]:`, arr[j*(j+1)/2 + i])
        }
    }
}