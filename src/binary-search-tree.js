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
    function findNode(node, data) {
      if (node === null) return null;
      if (node.data === data) return node;
      if (data < node.data) {
        return findNode(node.left, data);
      } else {
        return findNode(node.right, data);
      }
    }

    return findNode(this.rootNode, data);
  }

  remove(data) {
    function removeNode(node, data) {
      if (node === null) return null;
      if (data < node.data) {
        node.left = removeNode(node.left, data);
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
      } else {
        if (node.left === null && node.right === null) return null;
        if (node.left === null) return node.right;
        if (node.right === null) return node.left;

        let maxLeftNode = node.left;
        while (maxLeftNode.right !== null) {
          maxLeftNode = maxLeftNode.right;
          // console.log(maxLeftNode);
        }
        node.data = maxLeftNode.data;
        node.left = removeNode(node.left, maxLeftNode.data);
       }
      return node;
    }

    this.rootNode = removeNode(this.rootNode, data);
  }

  min() {

  }

  max() {

  }
}

module.exports = {
  BinarySearchTree
};