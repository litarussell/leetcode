/*
 * @lc app=leetcode.cn id=973 lang=javascript
 *
 * [973] 最接近原点的 K 个点
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
    let heap = new Array(points.length)
    let count = 0
    const swim = function() { // 上浮
        let cur = count, par = cur >> 1
        while (par > 0 && heap[par-1][1] > heap[cur-1][1]) {
            let tmp = heap[par-1]
            heap[par-1] = heap[cur-1]
            heap[cur-1] = tmp
            cur = par
            par = cur >> 1
        }
    }
    const sink = function(i) { // 下沉
        let cur = i, left = 2*i+1, right = left+1
        if (left < count && heap[left][1] < heap[cur][1]) {
            cur = left
        }
        if (right < count && heap[right][1] < heap[cur][1]) {
            cur = right
        }
        if (cur != i) {
            let tmp = heap[i]
            heap[i] = heap[cur]
            heap[cur] = tmp
            sink(cur)
        }
    }
    const insert = function(arr) {
        heap[count++] = [arr, arr[0]**2 + arr[1]**2]
        if (count > 1) {
            swim()
        }
    }
    const pop = function() {
        if (count > 0) {
            let min = heap[0]
            heap[0] = heap[--count]
            sink(0)
            return min
        }
    }
    for (let p of points) {
        insert(p)
    }
    let ans = []
    for (let i = 0; i < K; i++) {
        let re = pop()
        ans.push(re[0])
    }
    return ans
};
// @lc code=end

kClosest([[-5,4],[-3,2],[0,1],[-3,7],[-2,0],[-4,-6],[0,-5]], 6)