function solution1(matrix, p) {
    let n = matrix.length
    let dist = new Array(n).fill(Infinity)
    let visual = new Array(n).fill(false)
    visual[p] = true
    for (let i = 0; i < n; i++)
        dist[i] = matrix[p][i]
    
    for (let count = 1; count < n; count++) {
        let k = 0
        // 找出S集合中距离V集合最小的点
        let min = Infinity
        for (let i = 0; i < n; i++) {
            if (!visual[i] && dist[i] < min) {
                k = i
                min = dist[i]
            }
        }
        visual[k] = true     // 将节点k加入S集合
        // 更新dist数组
        for (let j = 0; j < n; j++) {
            if (!visual[j] && dist[k] + matrix[k][j] < dist[j]) {
                dist[j] = dist[k] + matrix[k][j]
            }
        }
    }
    return dist
}

function solution2(matrix, p) {
    let n = matrix.length
    let dist = new Array(n).fill(Infinity)
    let visual = new Array(n).fill(false)
    visual[p] = true
    for (let i = 0; i < n; i++)
        dist[i] = matrix[p][i]
    
    let stack = [p]
    // BFS处理
    while (stack.length > 0) {
        let node = stack.pop()
        // visual[node] = true
        // 对加入S集合的顶点做BFS, 找到距离最小的点
        let min = Infinity, k = -1
        for (let i = 0; i < n; i++) {
            if (!visual[i] && matrix[node][i] < min) {
                min = dist[i]
                k = i
            }
        }
        // 加入顶点k, 更新dist数组
        if (k == -1) break
        visual[k] = true
        stack.push(k)
        for (let i = 0; i < n; i++) {
            if (!visual[i] && dist[i] > dist[k] + matrix[k][i]) {
                dist[i] = dist[k] + matrix[k][i]
            }
        }
    }
    return dist
}

let m = [
    [0, 1, 12, Infinity, Infinity, Infinity],
    [Infinity, 0, 9, 3, Infinity, Infinity],
    [Infinity, Infinity, 0, Infinity, 5, Infinity],
    [Infinity, Infinity, 4, 0, 13, 15],
    [Infinity, Infinity, Infinity, Infinity, 0, 4],
    [Infinity, Infinity, Infinity, Infinity, Infinity, 0]
]

solution2(m, 0)
