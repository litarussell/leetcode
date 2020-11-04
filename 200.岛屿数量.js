/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * 并查集
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let map = {}
    const find = function (x) {
        if (!(x in map)) map[x] = x
        if (x != map[x]) map[x] = find(map[x])
        return map[x]
    }
    const union = function (x, y) {
        map[find(x)] = find(y)
    }
    let r = grid.length,
        c = grid[0].length
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            if (grid[i][j] == '0') continue
            let p = i * c + j
            union(p, p)
            if (i - 1 >= 0 && grid[i - 1][j] == '1') union(p, (i - 1) * c + j)
            if (i + 1 < r && grid[i + 1][j] == '1') union(p, (i + 1) * c + j)
            if (j - 1 >= 0 && grid[i][j - 1] == '1') union(p, i * c + j - 1)
            if (j + 1 < c && grid[i][j + 1] == '1') union(p, i * c + j + 1)
        }
    }

    for (let i in map) map[i] = find(i)
    console.log(map)
    console.log(new Set(Object.values(map)).size)
};
// @lc code=end

let g = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
]

numIslands(g)