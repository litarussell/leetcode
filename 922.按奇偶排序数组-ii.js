/*
 * @lc app=leetcode.cn id=922 lang=javascript
 *
 * [922] 按奇偶排序数组 II
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII1 = function(A) {
    for (let i = 0; i < A.length; i++) {
        let t1 = i & 1, t2 = A[i] & 1
        if (t1 == t2) continue
        for (let j = i+1; j < A.length; j++) {
            if ((A[j] & 1) == t1) {
                let t = A[i]
                A[i] = A[j]
                A[j] = t
            }
        }
    }
    return A
};

var sortArrayByParityII2 = function(A) {
    let i = 0, j = 1
    for (; i < A.length; i+=2) {
        if (A[i] & 1 == 1) { // 奇数
            while (A[j] & 1 == 1) j += 2
            let t = A[i]
            A[i] = A[j]
            A[j] = t
        }
    }
    return A
};

// @lc code=end

