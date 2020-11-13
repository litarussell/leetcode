/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures1 = function(T) {
    let stack = [0], ans = new Array(T.length).fill(0)
    let i = 1
    while (stack.length > 0 && i < T.length) {
        let p = stack[stack.length - 1]
        if (T[i] > T[p]) {
            let s = 0
            do {
                let j = stack.pop()
                ans[j] += (++s)
            } while(stack.length > 0 && T[i] > T[stack[stack.length-1]])
            for (let k = stack.length - 1; k >= 0; k--) {
                ans[stack[k]] += s
            }
        }
        stack.push(i)
        i++
    }
    while (stack.length > 0) ans[stack.pop()] = 0
    return ans
};

var dailyTemperatures2 = function(T) {
    let stack = [], ans = new Array(T.length).fill(0)
    for (let i = 0; i < T.length; i++) {
        while (stack.length > 0 && T[i] > T[stack[stack.length-1]]) { // 当前温度大于栈顶温度
            let p = stack.pop()
            ans[p] = i - p
        }
        stack.push(i)
    }
    return ans
};
// @lc code=end

dailyTemperatures([64,40,49,73,72,35,68,83,35,73,84,88,96,43,74,63,41,95,48,46,89,72,34,85,72,59,87,49,30,32,47,34,74,58,31,75,73,88,64,92,83,64,100,99,81,41,48,83,96,92,82,32,35,68,68,92,73,92,52,33,44,38,47,88,71,50,57,95,33,65,94,44,47,79,41,74,50,67,97,31,68,50,37,70,77,55,48,30,77,100,31,100,69,60,47,95,68,47,33,64])