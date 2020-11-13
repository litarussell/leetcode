/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为K的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// hash表
// 类似于前缀和, 通过hash表优化前缀和数组的遍历时间
var subarraySum = function(nums, k) {
    let hash = {0:1}, ans = 0, sum = 0
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        if ((sum - k) in hash) {
            ans += hash[sum-k]
        }
        hash[sum] = (hash[sum] || 0) + 1
    }
    return ans
};
// @lc code=end

