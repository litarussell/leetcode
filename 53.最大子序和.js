/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 *
 * https://leetcode-cn.com/problems/maximum-subarray/description/
 *
 * algorithms
 * Easy (46.57%)
 * Likes:    1160
 * Dislikes: 0
 * Total Accepted:    88.7K
 * Total Submissions: 187.9K
 * Testcase Example:  '[-2,1,-3,4,-1,2,1,-5,4]'
 *
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * 
 * 示例:
 * 
 * 输入: [-2,1,-3,4,-1,2,1,-5,4],
 * 输出: 6
 * 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 * 
 * 
 * 进阶:
 * 
 * 如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */

// 动态规划
var maxSubArray1 = function (nums) {
    let n = nums.length
    let count = (n + 1) * n / 2
    let dp = new Array(count)
    let max = -Infinity
    nums.forEach((num, i) => dp[i * (i + 1) / 2 + i] = num)
    for (let k = 1; k < n; k++) {
        for (let i = 0, j = k; i < n - k; i++, j++) {
            let a = dp[j * (j - 1) / 2 + i] + nums[j]
            let b = dp[j * (j + 1) / 2 + i + 1] + nums[i]
            let sum = Math.max(a, b)
            if (sum > max) max = sum
            dp[j * (j + 1) / 2 + i] = sum
        }
    }
    return max
};

// 动态规划
// 转移方程 dp[i] = max(dp[i-1]+num[i], num[i])
// dp[i] 表示以num[i]结尾的连续数组的最大和
var maxSubArray2 = function (nums) {
    let pre = 0, max = -Infinity
    for (let n of nums) {
        pre = Math.max(pre+n, n)
        max = Math.max(max, pre)
    }
    return max
}

var maxSubArray3 = function (nums) {
    let ans = nums[0]
    let sum = -Infinity
    for (let num of nums) {
        if (sum < 0) {
            sum = num
        } else {
            sum += num
        }
        ans = Math.max(ans, sum)
    }
    return ans
}

// let re = maxSubArray([-2,1,-1,4,-1,2,1,-5,4])
// console.log(re)