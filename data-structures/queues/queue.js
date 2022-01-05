class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  printList() {
    const arr = [];
    let currentNode = this.first;
    while (currentNode) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return arr;
  }

  peek() {
    return this.first ? this.first.value : null;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
    } else {
      this.last.next = newNode;
    }
    this.last = newNode;
    this.length++;
  }

  dequeue() {
    let currentValue;
    if (!this.length) {
      currentValue = null;
    } else {
      currentValue = this.first.value;
      const nextNode = this.first.next;
      this.first = nextNode;
      this.length--;
    }
    return currentValue;
  }

  isEmpty() {
    return !this.length;
  }
}

const queue = new Queue();
console.log(queue.peek())
console.log(queue.isEmpty());
console.log(queue.length);
console.log(queue.printList());
queue.enqueue('Joy');
queue.enqueue('Matt');
queue.enqueue('Pavel');
queue.enqueue('Samir');
console.log(queue.isEmpty());
console.log(queue.length);
console.log(queue.printList());
queue.dequeue();
console.log(queue.isEmpty());
console.log(queue.length);
console.log(queue.printList());
queue.dequeue();
console.log(queue.printList());
queue.dequeue();
console.log(queue.isEmpty());
console.log(queue.length);
console.log(queue.printList());