/*
 * @lc app=leetcode.cn id=207 lang=javascript
 *
 * [207] 课程表
 */

// @lc code=start
/**
 * 这类依赖问题, 大概率使用图算法解决
 * 该题使用拓扑排序
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    if (prerequisites.length == 0) return true

    function node() {
        this.in = 0
        this.next = []
    }
    let g = new Array(numCourses)
    for (let i = 0; i < numCourses; i++) g[i] = new node()

    for (let i = 0; i < prerequisites.length; i++) {
        let item = prerequisites[i]
        g[item[1]].next.push(item[0])
        g[item[0]].in += 1
    }

    let queue = []
    for (let i = 0; i < g.length; i++)
        if (g[i].in == 0) queue.push(i)
    let ans = []
    while (queue.length > 0) {
        let p = queue.shift()
        ans.push(p)
        for (let i = 0; i < g[p].next.length; i++) {
            let c = g[p].next[i]
            if (--(g[c].in) == 0)
                queue.push(c)
        }
    }
    return ans.length == numCourses
};
// @lc code=end
canFinish(3, [
    [1, 0]
])