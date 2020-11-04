/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 *
 * https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/description/
 *
 * algorithms
 * Medium (49.89%)
 * Likes:    380
 * Dislikes: 0
 * Total Accepted:    33K
 * Total Submissions: 66K
 * Testcase Example:  '"23"'
 *
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
 * 
 * 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 * 
 * 
 * 
 * 示例:
 * 
 * 输入："23"
 * 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 * 
 * 
 * 说明:
 * 尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序。
 * 
 */
/**
 * @param {string} digits
 * @return {string[]}
 */
let data_map = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
}

var letterCombinations = function(digits) {
    if (digits.length == 0) return []
    const dfs = function(arr, str, re) {
        if (arr.length == 0) {
            re.push(str)
            return
        }
        let s = data_map[arr[0]]
        for (let i = 0; i < s.length; i++)
            dfs(arr.substring(1), str+s[i], re)
    }
    let ans = []
    dfs(digits, '', ans)
    return ans
}

// letterCombinations("23")

// var letterCombinations = function(digits) {
//     if (!digits.length) return []
//     let strs = generateStr(digits)
//     let result = strs.reduce((p, c, i, arr) => {
//         let re = []
//         p.forEach(a => c.forEach(b => re.push(a + b)))
//         return re
//     })
//     return result
// };
// function generateStr(nums) {
//     let strs = []
//     for (let i = 0; i < nums.length; i++) {
//         let num = nums[i]
//         if (num in data_map) {
//             strs.push(data_map[num].split(''))
//         }
//     }
//     return strs
// }

// var letterCombinations = function(digits) {
//     let result = []
//     if (digits.length) fun(result, '', digits)
//     return result
// }
// function fun (re, str, num_strs) {
//     if (!num_strs.length) re.push(str)
//     else {
//         let num = num_strs[0]
//         let letters = data_map[num]
//         for (let i = 0; i < letters.length; i++) {
//             let letter = letters[i]
//             fun(re, str + letter, num_strs.slice(1))
//         }
//     }
// }

