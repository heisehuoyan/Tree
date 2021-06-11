/**
 * 实现二叉搜索树
 */

class Node {
  // 实现节点数据结构
  /**
   *
   * @param {*} element 当前节点
   * @param {*} parent 父节点
   */
  constructor(element, parent) {
    this.element = element;
    this.parent = parent;
    this.right = null;
    this.left = null;
  }
}
// const node = new Node(1, 3);
// console.log(node);

class BST {
  constructor() {
    this.root = null;
  }
  /**
   *
   * @param {*} element  当前插入的元素
   */
  add(element) {
    // 先判断根节点是否有值 ，没有则当前节点就是根节点
    if (this.root === null) {
      this.root = new Node(element, null);
      return;
    }
    // 若已经存在根节点，那么就要与根结比对是插入左树还是右树了
    // 然而这样实现是不行的，后面的节点会覆盖前面的
    // if (element < this.root.element) {
    //   this.root.left = new Node(element, this.root);
    // } else {
    //   this.root.right = new Node(element, this.root);
    // }

    // 思路：
    // 每次插入元素都要每棵子树是否有左右节点，
    // 若有则继续向下查找
    // 若没有，则以树节点为根（为当前元素的父节点），比对值大小插入左or右
    // 实现：遍历or递归
    let currentNode = this.root; //当前节点，默认为根节点向下查找
    let parentNode = null;
    let compare = null;
    while (currentNode) {
      parentNode = currentNode; // 记录当前节点为父节点
      compare = element - currentNode.element;
      if (compare < 0) {
        // 则从左树查找
        currentNode = currentNode.left; // 记录当前节点
      } else if (compare > 0) {
        // 右树查找
        currentNode = currentNode.right;
      } else {
        // 考虑相等情况
        currentNode.element = element;
        // 考虑插入的元素相等的情况，覆盖当前元素值好了
        return;
      }
    }
    let newNode = new Node(element, parentNode); // 插入的元素node
    if (compare < 0) {
      parentNode.left = newNode;
    } else if (compare > 0) {
      parentNode.right = newNode;
    }
  }
}

let arr = [2, 1, 3, 6, 8];
let tree = new BST();
arr.forEach((element) => {
  tree.add(element);
});
console.dir(tree.root, { depth: 1000 });
