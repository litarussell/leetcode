/*
 * @lc app=leetcode.cn id=208 lang=javascript
 *
 * [208] 实现 Trie (前缀树)
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var Trie = function () {
    this.value = new Array(26)
    this.end = false
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    let p = this
    for (let i = 0; i < word.length; i++) {
        let code = word[i].charCodeAt() - 97
        if (!p.value[code]) {
            p.value[code] = new Trie()
        }
        p = p.value[code]
    }
    p.end = true
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    let p = this
    for (let i = 0; i < word.length; i++) {
        let code = word[i].charCodeAt() - 97
        if (!p.value[code]) return false
        p = p.value[code]
    }
    return p.end
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    let p = this
    for (let i = 0; i < prefix.length; i++) {
        let code = prefix[i].charCodeAt() - 97
        if (!p.value[code]) return false
        p = p.value[code]
    }
    return true
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end