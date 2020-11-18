/*
 * @lc app=leetcode.cn id=1030 lang=javascript
 *
 * [1030] 距离顺序排列矩阵单元格
 */

// @lc code=start
/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
var allCellsDistOrder = function(R, C, r0, c0) {
    function part(arr1, arr2, i, j) {
        let p1 = arr1[i], p2 = arr2[i]
        while (i < j) {
            while (i < j && p1 <= arr1[j]) j--
            arr1[i] = arr1[j]
            arr2[i] = arr2[j]
            while (i < j && p1 >= arr1[++i]);
            arr1[j] = arr1[i] 
            arr2[j] = arr2[i] 
        }
        arr1[i] = p1
        arr2[i] = p2
        return i
    }
    function sort(arr1, arr2, i, j) {
        if (i < j) {
            let mid = part(arr1, arr2, i, j)
            sort(arr1, arr2, i, mid-1)
            sort(arr1, arr2, mid+1, j)
        }
    }
    let nodes = [], s = []
    for (let i = 0; i < R; i++) {
        let k = Math.abs(i - r0)
        for (let j = 0; j < C; j++) {
            s.push(k + Math.abs(j - c0))
            nodes.push([i, j])
        }
    }
    sort(s, nodes, 0, s.length-1)
    return nodes
};
// @lc code=end

// allCellsDistOrder(2,3,1,2)