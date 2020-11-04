/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 *
 * https://leetcode-cn.com/problems/combination-sum/description/
 *
 * algorithms
 * Medium (66.53%)
 * Likes:    336
 * Dislikes: 0
 * Total Accepted:    29K
 * Total Submissions: 43.5K
 * Testcase Example:  '[2,3,6,7]\n7'
 *
 * 给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
 * 
 * candidates 中的数字可以无限制重复被选取。
 * 
 * 说明：
 * 
 * 
 * 所有数字（包括 target）都是正整数。
 * 解集不能包含重复的组合。 
 * 
 * 
 * 示例 1:
 * 
 * 输入: candidates = [2,3,6,7], target = 7,
 * 所求解集为:
 * [
 * ⁠ [7],
 * ⁠ [2,2,3]
 * ]
 * 
 * 
 * 示例 2:
 * 
 * 输入: candidates = [2,3,5], target = 8,
 * 所求解集为:
 * [
 * [2,2,2,2],
 * [2,3,3],
 * [3,5]
 * ]
 * 
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

// 动态规划 从小到大找到数组中所有数字的组合
// var combinationSum = function(candidates, target) {
//   candidates.sort()
//   let hash = {}
//   for (let i = 1; i <= target; i++) hash[i] = []
//   let len = candidates.length
//   for (let i = 1; i <= target; i++) {
//     for (let j = 0; j < len; j++) {
//       k = candidates[j]
//       if (i - k === 0) hash[i].push([i])
//       else if (i > k) {
//         let n = hash[i - k] || null
//         if (n !== null) {
//           let arr = n.map(item => item.concat(k).sort())
//           // 去重
//           arr.forEach(a => {
//             if (hash[i].every(item => {
//               return a.toString() !== item.toString()
//             })) hash[i].push(a)
//           })
//         }
//       }
//     }
//   }
//   return hash[target]
// };

// 回溯法
// var combinationSum = function (candidates, target) {
//   let len = candidates.length
//   if (len === 0) return []
//   candidates.sort((a, b) => a-b)
//   let res = []
//   let path = [] // 组合路径
//   findCombinationSum(candidates, res, path, target)
//   return res
// }

// function findCombinationSum (candidates, res, path, target) {
//   // 递归终止状态
//   if (target === 0) return res.push([...path])
//   for (let i = 0; i < candidates.length; i++) {
//     let num = target - candidates[i]
//     if (num < 0) break
//     if (path.length > 0 && path[path.length-1] > candidates[i]) continue

//     path.push(candidates[i])
//     findCombinationSum(candidates, res, path, num)
//     path.pop()
//   }
// }


var combinationSum = function (candidates, target) {
    const dfs = function(arr, target, sum, path, ans) {
        if (target === sum) {
            ans.push([...path])
            return
        }
        for (let i = 0; i < arr.length; i++) {
            let num = sum + arr[i]
            if (num > target) break
            if (path.length > 0 && candidates[i] < path[path.length - 1]) continue
            path.push(candidates[i])
            dfs(arr, target, num, path, ans)
            path.pop()
        }
    }
    let ans = []
    candidates.sort((a,b) => a-b)
    dfs(candidates, target, 0, [], ans)
    return ans
}

// let candidates = [2,7,6,3,5,1], target = 9
// combinationSum(candidates, target)
