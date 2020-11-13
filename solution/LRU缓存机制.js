/**
 * @param {number} capacity
 */
function _node(key = null, v = null) {
    this.v = v
    this.key = key
    this.last = null
    this.next = null
}

function removeNode(node) {
    node.last.next = node.next
    node.next.last = node.last
}

function setToHead(node) {
    node.last = this.head
    node.next = this.head.next
    this.head.next.last = node
    this.head.next = node
}

function moveToHead(node) {
    removeNode(node)
    setToHead.call(this, node)
}

function removeBottom() {
    let node = this.bottom.last
    removeNode(node)
    return node.key
}

var LRUCache = function (capacity) {
    this.head = new _node('top')
    this.bottom = new _node('bottom')
    this.head.next = this.bottom
    this.bottom.last = this.head

    this.size = 0
    this.length = capacity
    this.keys = {}
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    let v = -1
    if (key in this.keys) {
        let node = this.keys[key]
        moveToHead.call(this, node)
        v = node.v
    }
    console.log(v)
    return v
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (key in this.keys) {
        let node = this.keys[key]
        node.v = value
        moveToHead.call(this, node)
    } else {
        let node = new _node(key, value)
        setToHead.call(this, node)
        this.keys[key] = node
        this.size++
        if (this.size > this.length) {
            let old_k = removeBottom.call(this)
            delete this.keys[old_k]
            this.size--
        }
    }
};

let cache = new LRUCache(2)

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);
cache.put(3, 3);
cache.get(2);
cache.put(4, 4);
cache.get(1);
cache.get(3);
cache.get(4);