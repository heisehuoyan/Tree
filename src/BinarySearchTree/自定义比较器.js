/**
 * 实现二叉搜索树
 * 自定义比较器
 */

class Node {
  constructor(element, parent) {
    this.element = element;
    this.parent = parent;
    this.right = null;
    this.left = null;
  }
}

class BST {
  constructor(compare) {
    this.root = null;
    this.compare = compare || this.compare; // 如不传自定义比较函数则采用默认的
  }
  compare(e1, e2) {
    return e1.age - e2.age;
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
      compare = this.compare(element, currentNode.element);
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

let arr = [{ age: 2 }, { age: 1 }, { age: 3 }, { age: 6 }, { age: 8 }];
let tree = new BST((e1, e2) => {
  return e2.age - e1.age;
});
arr.forEach((element) => {
  tree.add(element);
});
console.dir(tree.root, { depth: 1000 });
