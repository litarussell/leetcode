
class minHeap {
    constructor(k) {
        this.count = 0
        this.heap = new Array(k)
    }
    swap(a, b) {
        let tmp = this.heap[a]
        this.heap[a] = this.heap[b]
        this.heap[b] = tmp
    }
    swim() { // 上浮
        let cur = this.count
        let par = Math.floor(cur / 2)
        while (par > 0 && this.heap[par-1][1] > this.heap[cur-1][1]) { // 父节点大于子节点 需上浮满足小堆要求
            swap(par-1, cur-1)
            cur = par
            par = Math.floor(cur / 2)
        }
    }
    sink(k) { // 下沉
        let flag = k, left = 2*k+1, right = 2*k+2
        if (left < this.count && this.heap[flag][1] > this.heap[left][1]) flag = left
        if (right < this.count && this.heap[flag][1] > this.heap[right][1]) flag = right
        if (flag != k) {
            swap(flag, k)
            sink(flag)
        }
    }
    insert(v) {
        if (this.count <= k) {
            this.heap[this.count++] = v
            if (this.count > 1) {
                swim()
            }
        }
    }
    pop() {
        let min = this.heap[0]
        this.heap[0] = this.heap[--this.count]
        sink(0)
        return min
    }
}

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

function buildLinkList(arr) {
    let root = new ListNode()
    let p = root
    for (let i = 0; i < arr.length; i++) {
        p.next = new ListNode(arr[i])
        p = p.next
    }
    return root.next
}

function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}

function buildBinaryTree(arr) {
    let head = new TreeNode(arr[0])
    let stack = [head], i = 1
    while (stack.length && i < arr.length) {
        let root = stack.shift()
        if (arr[i] != null) {
            root.left = new TreeNode(arr[i])
            stack.push(root.left)
        }
        i+=1
        if (arr[i] != null) {
            root.right = new TreeNode(arr[i])
            stack.push(root.right)
        }
        i+=1
    }
    return head
}

module.exports = {
    ListNode,
    buildLinkList,
    TreeNode,
    buildBinaryTree,
    minHeap
}