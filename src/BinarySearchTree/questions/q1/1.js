// https://leetcode-cn.com/problems/same-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (q === null && p === null) {
    // 如果两个根结点都为null，则相等
    return true;
  } else if (q === null || p === null) {
    // 要是其中一个为null那么不相等
    return false;
  } else if (q.val !== p.val) {
    // 两个根结点不为null但是不相等
    return false;
  } else {
    //两个根节点不为null，不相等时，则递归判断子节点
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  }
};
