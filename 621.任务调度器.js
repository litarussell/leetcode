/*
 * @lc app=leetcode.cn id=621 lang=javascript
 *
 * [621] 任务调度器
 */

// @lc code=start
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    let arr = new Array(26).fill(0)
    for (let n of tasks) arr[n.charCodeAt() - 65] += 1
    arr.sort((a,b) => a-b)
    let time = 0
    while (arr[25] > 0) {
        let j = 0
        while (j <= n) {
            if (arr[25] == 0) break
            if (j < 26 && arr[25-j] > 0) {
                arr[25-j]--
            }
            time++
            j++
        }
        arr.sort((a,b)=>a-b)
    }
    return time
};
// @lc code=end

let tasks = ["A","A","A","B","B","B","C","D"], n = 2
leastInterval(tasks, n)