/**
 * 动态规划, 找到一个子集, 其和为数组和的1/2即可
 * 该题的推广是题698, 推广为划分k个相等的子集
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
    if (nums.length < 2) return false
    let sum = nums.reduce((a, b) => a + b)
    if (sum & 1) return false
    let dp = new Array((sum >>= 1) + 1).fill(false)
    for (let i = 1; i <= sum; i++) dp[i] = (nums[0] == i)

    for (let i = 1; i < nums.length; i++) {
        for (let j = sum; j >= nums[i]; j--) {
            dp[j] = dp[j] || dp[j - nums[i]]
        }
    }

    return dp[sum]
};

canPartition([1, 5, 11, 5])