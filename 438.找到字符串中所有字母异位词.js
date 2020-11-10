/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams1 = function(s, p) {
    let ans = [], hash = {}
    for (let item of p) hash[item] = (hash[item] || 0) + 1
    let l = 0, r = l + p.length
    while (r <= s.length) {
        let window = {}
        let i = l
        for (; i < r; i++) window[s[i]] = (window[s[i]] || 0) + 1
        let flag = true
        for (let t in hash) {
            if (!(t in window) || window[t] != hash[t]) {
                flag = false
            }
        }
        if (flag) ans.push(l)
        l++
        r++
    }
    return ans
};

var findAnagrams2 = function(s, p) {
    let hash = new Array(26).fill(0), window = new Array(26).fill(0)
    for (let t of p) hash[t.charCodeAt() - 97] += 1
    let l = 0, r = 0, ans = []
    while (r < s.length) {
        let n = s[r].charCodeAt() - 97
        window[n] += 1
        r += 1
        while (hash[n] < window[n]) {
            let nl = s[l].charCodeAt() - 97
            window[nl] -= 1
            l += 1
        }
        if (r - l == p.length) {
            ans.push(l)
        }
    }
    return ans
};

// @lc code=end

findAnagrams("abab", "ab")