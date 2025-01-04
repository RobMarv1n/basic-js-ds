const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    function addNode(node, data) {
      if (node === null) return new Node(data);
      if (node.data === data) return node;
      if (data < node.data) {
        node.left = addNode(node.left, data);
      } else {
        node.right = addNode(node.right, data);
      }
      return node;
    }

    this.rootNode = addNode(this.rootNode, data);
  }

  has(data) {
    function hasNode(node, data) {
      if (node === null) return false;
      if (node.data === data) return true;
      if (data < node.data) {
        return hasNode(node.left, data);
      } else {
        return hasNode(node.right, data);
      }
    }

    return hasNode(this.rootNode, data);
  }

  find(data) {

  }

  remove(data) {

  }

  min() {

  }

  max() {

  }
}
// const tree = new BinarySearchTree();
// tree.add(2);
// tree.add(3);
// tree.add(4);
// console.log(tree.root().data);
module.exports = {
  BinarySearchTree
};