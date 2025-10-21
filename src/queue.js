const { NotImplementedError } = require('../lib/errors');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.list = null;
  }

  getUnderlyingList() {
    return this.list ? structuredClone(this.list) : null;
  }

  enqueue(value) {
    if (this.list === null) {
      this.list = new ListNode(value);
    } else {
      let currentNode = this.list;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = new ListNode(value);
    }
  }

  dequeue() {
    if (!this.list) return undefined;

    const headValue = this.list.value;
    this.list = this.list.next;
    return headValue;
  }
}

module.exports = {
  Queue
};
