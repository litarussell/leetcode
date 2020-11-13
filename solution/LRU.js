function LRU( operators ,  k ) {
    // write code here
    function Node(key, v) {
        this.key = key
        this.val = v
        this.last = null
        this.next = null
    }
    let top = new Node(null, null)
    let bottom = new Node(null, null)
    top.next = bottom
    bottom.last = top
    let size = 0
    let hash = {}
    const get = function(key) {
        if (key in hash) {
            let p = hash[key]
            p.last.next = p.next
            p.next.last = p.last
            
            p.next = top.next
            p.last = top
            top.next.last = p
            top.next = p
            return p.val
        } else {
            return -1
        }
    }
    const set = function(key, v) {
        let p = null
        if (key in hash) {
            p = hash[key]
            p.val = v
            // 删除节点
            p.last.next = p.next
            p.next.last = p.last
        } else {
            p = new Node(key, v)
            hash[key] = p
            size++
            if (size > k) {
                let del = bottom.last
                let t = del.last
                t.next = bottom
                bottom.last = t
                delete hash[del.key]
                size--
            }
        }
        p.next = top.next
        p.last = top
        top.next.last = p
        top.next = p
    }
    
    let ans = []
    for (let i = 0; i < operators.length; i++) {
        let op = operators[i]
        switch(op[0]) {
            case 1:
                set(op[1], op[2])
                break
            case 2:
                ans.push(get(op[1]))
                break
        }
    }
    return ans
}

LRU([[1,1,-2], [1,1,1], [2,1], [1,2,2], [1,3,3], [2,2], [2,3], [1,4,4], [2,1], [2,4]], 1)
