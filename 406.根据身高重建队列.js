/*
 * @lc app=leetcode.cn id=406 lang=javascript
 *
 * [406] 根据身高重建队列
 */

// @lc code=start
/**
 * 贪心算法:
 * 1, 分解为子问题
 * 2, 求解子问题, 该子问题得到局部最优解
 * 3, 每个子问题的局部最优解合成为原问题的解
 * 比如该问题: 分解为各个人的站队问题, 为了保证局部最优解能够得到最后的正确解, 应该先排高的人, 将其排到对应位置; 排矮的人时就不需要考虑高的人
 *    只需要保证先排的人的相对位置就行了
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    people.sort((a, b) => {
        if (a[0] == b[0])
            return a[1] - b[1]
        else
            return b[0] - a[0]
    })
    let ans = []
    for (let i = 0; i < people.length; i++) {
        let p = people[i]
        ans.splice(p[1], 0, p)
    }
    return ans
};
// @lc code=end

// reconstructQueue([[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]])