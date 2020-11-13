
module.exports = {
    TreeNode,
    buildBinaryTree
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

