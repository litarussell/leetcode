/*
 * @lc app=leetcode.cn id=210 lang=javascript
 *
 * [210] 课程表 II
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
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

    let ans = [], queue = []
    for (let i = 0; i < g.length; i++)
        if (g[i].in == 0) queue.push(i)
    while (queue.length > 0) {
        let p = queue.shift()
        ans.push(p)
        for (let i = 0; i < g[p].next.length; i++) {
            let c = g[p].next[i]
            if (--(g[c].in) == 0) queue.push(c) 
        }
    }
    return ans.length == numCourses ? ans : []
};
// @lc code=end

findOrder(3, [[1,0], [1,2], [0,1]])