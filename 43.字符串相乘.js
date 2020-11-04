/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if (num1 == '0' || num2 == '0') return '0'
    let carry = 0
    let re = new Array(num1.length + num2.length).fill(0)

    let s1 = num1, s2 = num2
    if (num1.length < num2.length) {
        s1 = num2
        s2 = num1
    }

    for (let i = s2.length - 1; i >= 0; i--) {
        let n1 = s2[i].charCodeAt() - 48
        let p = s2.length - 1 - i

        for (let j = s1.length - 1; j >= 0; j--) {
            let n2 = s1[j].charCodeAt() - 48
            let s = n1 * n2 + carry
            carry = Math.floor(s / 10)
            
            let sum = re[p] + s % 10
            carry += Math.floor(sum / 10)
            re[p++] = sum % 10
        }
        if (carry > 0) re[p] = carry
        carry = 0
    }
    re = re.reverse()
    if (re[0] == 0) re = re.slice(1)
    return re.join('')
};
// @lc code=end

