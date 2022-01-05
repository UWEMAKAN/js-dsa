class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = new Node(10);
    this.tail = this.head;
    this.length = 1;
  }

  printList() {
    const arr = [];
    let currentNode = this.head;
    while (currentNode) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return arr;
  }

  append(value) {
    const newNode = new Node(value);
    newNode.previous = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
    this.head.previous = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  insert(index, value) {
    const middle = Math.floor(this.length / 2);
    if (index === 0) {
      this.prepend(value);
    } else if (index >= this.length) {
      this.append(value);
    } else if (index > 0 && index <= middle) {
      const newNode = new Node(value);
      const leadingNode = this.traverseForwardsToIndex(index - 1);
      const nextNode = leadingNode.next;
      newNode.next = nextNode;
      newNode.previous = leadingNode;
      nextNode.previous = newNode;
      leadingNode.next = newNode;
      this.length++;
    } else if (index > middle && index < this.length) {
      const newNode = new Node(value);
      const trailingNode = this.traverseBackwardsToIndex(index);
      const previousNode = trailingNode.previous;
      newNode.previous = previousNode;
      newNode.next = trailingNode;
      previousNode.next = newNode;
      trailingNode.previous = newNode;
      this.length++;
    }
  }

  remove(index) {
    const middle = Math.floor(this.length / 2);
    const lastIndex = this.length - 1;
    if (index === 0) {
      const nextNode = this.head.next;
      delete nextNode.previous;
      this.head = nextNode;
      this.length--;
    } else if (index === lastIndex) {
      const previousNode = this.tail.previous;
      previousNode.next = null;
      this.tail = previousNode;
      this.length--;
    } else if (index > 0 && index <= middle) {
      const currentNode = this.traverseForwardsToIndex(index);
      this.setNodes(currentNode);
    } else if (index > middle && index < lastIndex) {
      const currentNode = this.traverseBackwardsToIndex(index);
      this.setNodes(currentNode);
    }
  }

  setNodes(currentNode) {
    const nextNode = currentNode.next;
    const previousNode = currentNode.previous;
    nextNode.previous = previousNode;
    previousNode.next = nextNode;
    this.length--;
  }

  traverseForwardsToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter < index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  traverseBackwardsToIndex(index) {
    let counter = this.length - 1;
    let currentNode = this.tail;
    while (counter > index) {
      currentNode = currentNode.previous;
      counter--;
    }
    return currentNode;
  }

  reverse() {
    let previousNode = this.head;
    let currentNode = this.head.next;
    let nextNode = this.head.next.next;
    this.tail = this.head;
    console.log('before while loop');
    while (nextNode) {
      previousNode.previous = currentNode;
      currentNode.next = previousNode;
      currentNode.previous = nextNode
      previousNode = currentNode;
      nextNode = nextNode.next;
    }
    currentNode.next = previousNode;
    currentNode.previous = nextNode;
    this.tail.previous = this.tail.next;
    this.tail.next = null;
    this.head = currentNode;
  }
}

const myList = new DoublyLinkedList(10);
myList.append(5);
myList.append(16);
// myList.prepend(21);
// myList.prepend(30);
// myList.insert(2, 28);
// myList.insert(4, 8);
// myList.remove(5);
console.log(myList.printList());
myList.reverse();
console.log(myList.printList());
myList.reverse();
console.log(myList.printList());
myList.reverse();
console.log(myList.printList());