class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class SinglyLinkedList {
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
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
    }
    if (index >= this.length) {
      this.append(value);
    }
    if (index > 0 && index < this.length) {
      const newNode = new Node(value);
      const leader = this.traverseToIndex(index - 1);
      const holdingPointer = leader.next;
      newNode.next = holdingPointer;
      leader.next = newNode;
      this.length++;
    }
    
  }

  remove(index) {
    if (index === 0) {
      const nextNode = this.head.next;
      this.head = nextNode;
      this.length--;
    } else if (index === this.length - 1) {
      const leader = this.traverseToIndex(index - 1);
      leader.next = null;
      this.tail = leader;
      this.length--;
    } else if (index > 0 && index < this.length - 1) {
      const leader = this.traverseToIndex(index - 1);
      const nextNode = leader.next.next;
      leader.next = nextNode;
      this.length--;
    }
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter < index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  reverse() {
    let previousNode = null;
    let currentNode = this.head;
    this.tail = this.head;
    while (currentNode.next) {
      const nextNode = currentNode.next;
      currentNode.next = previousNode;
      previousNode = currentNode;
      currentNode = nextNode;
    }
    currentNode.next = previousNode;
    this.head = currentNode;
    this.tail.next = null;
  }
}

const myList = new SinglyLinkedList(10);
myList.append(5);
myList.append(16);
myList.prepend(21);
myList.prepend(30);
myList.insert(2, 28);
console.log(myList.printList());
myList.reverse();
console.log(myList.printList());
myList.reverse();
console.log(myList.printList());
myList.reverse();
console.log(myList.printList());