// 

const data = [
  [0, 2, 6, 5],
  [2, 0, 4, 4],
  [6, 4, 0, 2],
  [5, 4, 2, 0]
]

let re = solution(data)
re.forEach(item => console.log(...item))

console.log(re[0][re[0].length - 1])

function solution (roadInfo) {
  let n = roadInfo.length
  let n_node_set = 1 << (n - 1) // 节点集合使用二进制位的位置来表示
  let dp = new Array(n)
  // 初始化dp数组, 该数组存储从节点 i 出发, 经过其他的节点回到 0 节点的最小权重和
  // 例如 dp[0][0] 表示从 0 出发 回到 0 的权重
  // dp[1][0] 表示从 1 出发 不经过其他节点回到 0 的最小权重和, 自然就是 1 到 0 节点之间的权重
  // 最后求解的其实就是dp[0][{除了0外的节点集合}]
  for (let i = 0; i < n; i++) {
    dp[i] = new Array(n_node_set)
    dp[i][0] = roadInfo[i][0] // 表示其他节点直接到达 0 节点的权重
  }
  // 从集合{1}开始遍历, 分别计算各个节点通过集合回到节点 0 的权重和
  for (let j = 1; j < n_node_set; j++) {
    for (let i = 0; i < n; i++) {
      let check = (j >> (i - 1)) & 1 // 检查集合 j 的第 i 位上是否是 1 , 即集合 j 是否包含节点 i
      if (check == 1) continue // 如果集合中包含了节点 i , 则跳过
      // 分别通过集合中的所有节点, 找到最小的权重
      // 通过 k 值不断的去check集合 j, 取出其中的节点; 集合中包含节点 0 的已经可以确定权重了, 所以不用check
      for (let k = 1; k < n; k++) {
        let check = (j >> (k - 1)) & 1
        if (check == 0) continue
        // 此时 k 为集合 j 中的一个节点
        // 将节点 k 编码到二进制位中, 然后和集合 j 做异或处理, 将节点 k 从集合 j 中移除
        let p = j ^ (1 << (k - 1)) // p为移除了 k 的集合编码
        if (dp[i][j] == null || dp[i][j] > roadInfo[i][k] + dp[k][p]) {
          dp[i][j] = roadInfo[i][k] + dp[k][p]
        }
      }
    }
  }

  return dp
}