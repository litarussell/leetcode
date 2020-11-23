/*
 * @lc app=leetcode.cn id=452 lang=javascript
 *
 * [452] 用最少数量的箭引爆气球
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */

// 求不重叠的区间
var findMinArrowShots1 = function(points) {
    if (points.length == 0) return 0
    points.sort((a,b) => a[0] - b[0])
    let dp = new Array(points.length).fill(0)
    dp[0] = 1
    let max = 1
    for (let i = 1; i < points.length; i++) {
        let j = i
        while (j > 0) {
            if (points[--j][1] < points[i][0])
                dp[i] = Math.max(dp[i], dp[j])
        }
        dp[i] += 1
        max = Math.max(max, dp[i])
    }
    return max
};

// 贪心算法 引爆气球的是时候尽量靠近气球的右边界 从左到右 
var findMinArrowShots2 = function(points) {
    if (points.length == 0) return 0
    points.sort((a, b) => a[1] - b[1])
    let down = new Array(points.length).fill(false)
    let ans = 0
    for (let i = 0; i < points.length; i++) {
        if (down[i]) continue
        ans += 1
        let p = points[i][1]
        down[i] = true
        for (let j = points.length-1; j > i; j--) {
            if(!down[j] && points[j][0] <= p) {
                down[j] = true
            }
        }
    }
    return ans
}

// 贪心算法 引爆气球的是时候尽量靠近气球的右边界 从左到右 
// 优化 内层循环 在遇到第一个不满足 points[j][0] <= p 的就可以跳出
var findMinArrowShots = function(points) {
    if (points.length == 0) return 0
    points.sort((a, b) => a[1] - b[1])
    let ans = 1
    let p = points[0][1]
    for (let i = 1; i < points.length; i++) {
        if (p < points[i][0]) {
            p = points[i][1]
            ans += 1
        }
    }
    return ans
}
// @lc code=end

let p = [[10,16],[2,8],[1,6],[7,12]]
findMinArrowShots(p)
