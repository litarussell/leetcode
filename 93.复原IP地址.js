/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
    const dfs = function(index, count, path, ans) {
        if (count == 4) {
            if (index == s.length) ans.push(path.join('.'))
            return
        }

        if (s[index] == '0') {
            path[count] = 0
            dfs(index + 1, count + 1, path, ans)
        }

        let sum = 0
        for (let i = index; i < s.length; i++) {
            sum = sum * 10 + (s[i] - '0')
            if (sum <= 0 || sum > 255) break
            path[count] = sum
            dfs(i + 1, count + 1, path, ans)
        }
    }
    let ans = [], path = new Array(4).fill(0)
    dfs(0, 0, path, ans)
    return ans
};


// var restoreIpAddresses = function (s) {
//     if (s.length < 4 || s.length > 12) return []
//     let count = 4,
//         str = new Array(count),
//         ans = []

//     const dfs = function (id, start) {
//         if (id == count) {
//             if (start == s.length) {
//                 ans.push(str.join('.'))
//             }
//             return
//         }

//         if (start == s.length) return

//         if (s[start] == '0') {
//             str[id] = 0
//             dfs(id + 1, start + 1)
//         }

//         let num = 0
//         for (let e = start; e < s.length; e++) {
//             num = num * 10 + (s[e] - '0')
//             if (num > 0 && num <= 0xff) {
//                 str[id] = (num)
//                 dfs(id + 1, e + 1)
//             } else {
//                 break
//             }
//         }
//     }
//     dfs(0, 0)
//     console.log(ans)
//     return ans
// };

// var restoreIpAddresses1 = function (s) {
//     let ans = [],
//         str = []

//     const dfs = function (id, start) {
//         if (id == 4) {
//             if (start == s.length) {
//                 ans.push(str.join(','))
//             }
//             return
//         }

//         if (start == s.length) return

//         if (s[start] == '0') {
//             str[id] = 0
//             dfs(id + 1, start + 1)
//         }

//         let num = 0
//         for (let i = start; i < s.length; i++) {
//             num = num * 10 + (s[i] - '0')
//             if (num > 0 && num <= 0xff) {
//                 str[id] = num
//                 dfs(id + 1, i + 1)
//             } else {
//                 break
//             }
//         }
//     }

//     dfs(0, 0)
//     console.log(ans)
//     return ans
// }
