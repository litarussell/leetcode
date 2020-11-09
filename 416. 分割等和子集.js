/**
 * 动态规划, 找到一个子集, 其和为数组和的1/2即可
 * 该题的推广是题698, 推广为划分k个相等的子集
 * @param {number[]} nums
 * @return {boolean}
 */

// dp[i][j] 表示在区间[0, i]中是否有元素和为j
// dp[i][j] = dp[i-1][j] || dp[i-1][j-nums[i]]
var canPartition1 = function(nums) {
    let dp = new Array(nums.length), sum = nums.reduce((a, b) => a + b)
    if (sum & 1) return false
    sum >>= 1
    for (let i = 0; i < nums.length; i++) dp[i] = new Array(sum + 1).fill(false)
    if (nums[0] <= sum) dp[0][nums[0]] = true
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j <= sum; j++) {
            dp[i][j] = dp[i-1][j] || (j >= nums[i] ? dp[i-1][j-nums[i]] : false)
        }
    }
    return dp[nums.length-1][sum]
}

// dp[i] 0 <= i <= sum/2
// 表示在当前区间中是否有元素和 = i
// 应当从后向前遍历, 因为是滚动数组, 当前状态依赖于之前状态, 只能先从后修改状态
var canPartition2 = function (nums) {
    if (nums.length < 2) return false
    let sum = nums.reduce((a, b) => a + b)
    if (sum & 1) return false
    let dp = new Array((sum >>= 1) + 1).fill(false)
    if (nums[0] <= sum) dp[nums[0]] = true

    for (let i = 1; i < nums.length; i++) {
        for (let j = sum; j >= nums[i]; j--) {
            dp[j] = dp[j] || dp[j - nums[i]]
        }
    }

    return dp[sum]
};

canPartition1([1, 5, 11, 5])