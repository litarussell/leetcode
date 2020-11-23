/*
 * @lc app=leetcode.cn id=1122 lang=javascript
 *
 * [1122] 数组的相对排序
 */

// @lc code=start
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let hash = {}
    for (let i = 0; i < arr2.length; i++) hash[arr2[i]] = i
    arr1.sort((a, b) => {
        if (a in hash) {
            if (b in hash) {
                return hash[a] - hash[b]
            } else {
                return -1
            }
        } else {
            if (b in hash) {
                return 1
            } else {
                return a - b
            }
        }
    })
    return arr1
};
// @lc code=end

let arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
relativeSortArray(arr1, arr2)
