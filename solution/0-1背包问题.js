// 0-1背包
// dp[i][j] 将前i件物品装入容量为j的背包中的最大价值
// dp[i][j] = max(dp[i-1][j], dp[i-1][j-w[i]] + v[i])
// 滚动数组优化 dp[j] = max(dp[j], dp[j-w[i]] + v[i]) 逆向枚举

// 完全背包 每种物品有无限个, 一共有N种
// dp[i][j] 将前i件物品装入容量为j的背包中的最大价值
// dp[i][j] = max(dp[i-1][j], dp[i][j-w[i]] + v[i])
// 滚动数组优化 dp[j] = max(dp[j], dp[j-w[i]] + v[i]) 正向枚举

// 多重背包 每种物品有限个 一共N种 重量限制为W 第i件物品数量为n[i] 重量为w[i] 价值为v[i]
// dp[i][j] = {max(dp[i-1][j - k*w[i]] + k*v[i]) for k} k <= min(n[i], j/w[i])
// 滚动数组优化 dp[j] = {max(dp[j], dp[j-k*w[i]] + v[i]) for k}

// 求完全背包方案总数 dp[i][j] = sum(dp[i-1][j], dp[i][j-w[i]])

function solution(w, p, c) {
    let dp = new Array(c + 1).fill(0)
    let n = w.length
    for (let i = 1; i <= n; i++) {
        for (let j = c; j >= w[i - 1]; j--) {
            dp[j] = Math.max(dp[j], dp[j - w[i - 1]] + p[i - 1])
        }
    }
    console.log(dp.slice(-10))
}

// let w = [35, 30, 60, 50, 40, 10, 25]
// let p = [10, 40, 30, 50, 35, 40, 30]
// let c = 150
// solution(w, p, c)

const backPack = function (m, A) {
    let dp = new Array(A + 1).fill(0)
    let n = m.length
    for (let i = 1; i <= n; i++) {
        for (let j = A; j >= m[i - 1]; j--) {
            dp[j] = Math.max(dp[j], dp[j - m[i - 1]] + m[i - 1])
        }
    }
    console.log(dp)
    return dp[A]
}

backPack([3, 4, 8, 5], 10)