/*
 * @lc app=leetcode.cn id=784 lang=javascript
 *
 * [784] 字母大小写全排列
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function (S) {
    const dfs = function(index, str, ans) {
        if (str.length == S.length) {
            ans.push(str)
            return
        }
        
        for (let i = index; i < S.length; i++) {
            dfs(i + 1, str + S[i], ans)
            if (S[i] >= 'a' && S[i] <= 'z') {
                dfs(i + 1, str + S[i].toUpperCase(), ans)
            }
            else if (S[i] >= 'A' && S[i] <= 'Z') {
                dfs(i + 1, str + S[i].toLowerCase(), ans)
            }
        }
    }
    let ans = []
    dfs(0, '', ans)
    return ans
};
// @lc code=end

letterCasePermutation('A1b2')