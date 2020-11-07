/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight1 = function(nums) {
    nums.sort((a,b) => a-b)
    if (nums[3] == 0) return true
    let zero = 0, pre = nums[4], i = 3
    for (; i >= 0; i--) {
        if (nums[i] == 0) break
        if (pre == nums[i]) return false
        if (pre - nums[i] != 1) zero += (pre - nums[i] - 1)
        pre = nums[i]
    }
    return zero <= i + 1
};

var isStraight2 = function(nums) {
    nums.sort((a,b) => a-b)
    let zero = 0
    for (let i = 0; i < 4; i++) {
        if (nums[i] == 0) zero++
        else if (nums[i] == nums[i+1]) return false
    }
    return nums[4] - nums[zero] < 5
};

isStraight2([13,13,9,12,10])