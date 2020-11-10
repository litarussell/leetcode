/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 *
 * https://leetcode-cn.com/problems/next-permutation/description/
 *
 * algorithms
 * Medium (31.24%)
 * Likes:    232
 * Dislikes: 0
 * Total Accepted:    17.6K
 * Total Submissions: 56.4K
 * Testcase Example:  '[1,2,3]'
 *
 * 实现获取下一个排列的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列。
 * 
 * 如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。
 * 
 * 必须原地修改，只允许使用额外常数空间。
 * 
 * 以下是一些例子，输入位于左侧列，其相应输出位于右侧列。
 * 1,2,3 → 1,3,2
 * 3,2,1 → 1,2,3
 * 1,1,5 → 1,5,1
 * 
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// 下一个最大排列可这么理解: 
// 将序列数组看作一个整数, 下一个最大排列就是找到下一个比当前排列还大的整数排列;
// 所以, 从右向左找到
var nextPermutation1 = function(nums) {
    let i = nums.length - 2
    while (i >= 0 && nums[i] >= nums[i+1]) i--
    if (i >= 0) {
        let j = nums.length - 1
        while (j >= 0 && nums[j] <= nums[i]) j--
        swap(nums, i, j)
    }
    reverse(nums, i + 1)
};

function swap (arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
function reverse (arr, start) {
    for (let i = start, j =  arr.length - 1; i < j; i++, j--) {
        swap(arr, i, j)
    }
}


var nextPermutation2 = function(nums) {
    if (nums.length < 2) return
    let end = nums.length - 1
    let i = end - 1, j = end, k
    while (i >= 0) {
        if (nums[j] > nums[i]) break
        j--
        i--
    }
    if (i < 0) {
        nums.sort((a,b) => a - b)
        return
    }
    for (k = end; k >= j; k--) {
        if (nums[k] > nums[i]) break
    }
    let tmp = nums[i]
    nums[i] = nums[k]
    nums[k] = tmp
    nums.splice(i+1, end-i, ...nums.slice(i+1).sort((a,b)=>a-b))
};
