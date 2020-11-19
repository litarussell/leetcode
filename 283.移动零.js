/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes1 = function(nums) {
    for (let i = 0, j = 0; j < nums.length; j++) {
        if (nums[j] != 0) {
            let t = nums[i]
            nums[i] = nums[j]
            nums[j] = t
            i++
        }
    }
};

var moveZeroes2 = function(nums) {
    let zero = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) zero++
        else {
            let t = nums[i]
            nums[i] = nums[i - zero]
            nums[i - zero] = t
        }
    }
};

// @lc code=end

moveZeroes1([0,1,0,3,12])