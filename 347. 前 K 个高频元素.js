/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    // 小堆
    let count = 0
    let heap = new Array(k)
    function swap(a, b) {
        let tmp = heap[a]
        heap[a] = heap[b]
        heap[b] = tmp
    }
    function swim() { // 上浮
        let cur = count
        let par = Math.floor(cur / 2)
        while (par > 0 && heap[par-1][1] > heap[cur-1][1]) { // 父节点大于子节点 需上浮满足小堆要求
            swap(par-1, cur-1)
            cur = par
            par = Math.floor(cur / 2)
        }
    }
    function sink(k) { // 下沉
        let flag = k, left = 2*k+1, right = 2*k+2
        if (left < count && heap[flag][1] > heap[left][1]) flag = left
        if (right < count && heap[flag][1] > heap[right][1]) flag = right
        if (flag != k) {
            swap(flag, k)
            sink(flag)
        }
    }

    function insert(v) {
        if (count <= k) {
            heap[count++] = v
            if (count > 1) {
                swim()
            }
        }
    }
    function pop() {
        let min = heap[0]
        heap[0] = heap[--count]
        sink(0)
        return min
    }

    let hash = {}
    for (let i = 0; i < nums.length; i++) {
        let n = nums[i]
        hash[n] = (hash[n] || 0) + 1
    }
    for (let key in hash) {
        if (count < k) insert([key, hash[key]])
        else if (hash[key] > heap[0][1]) { // 当前元素频率大于堆顶元素频率
            pop()
            insert([key, hash[key]])
        }
    }
    let ans = [], size = count
    for (let i = 0; i < size; i++) {
        let item = pop()
        ans.unshift(item[0])
    }
    return ans
};

topKFrequent([6,0,1,4,9,7,-3,1,-4,-8,4,-7,-3,3,2,-3,9,5,-4,0], 6)
