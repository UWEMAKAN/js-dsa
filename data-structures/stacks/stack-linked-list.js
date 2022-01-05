class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  printList() {
    const arr = [];
    let currentNode = this.top;
    while (currentNode) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return arr;
  }

  peek() {
    return this.top?.value || null;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.bottom) {
      this.bottom = newNode;
    }
    newNode.next = this.top;
    this.top = newNode;
    this.length++;
  }

  pop() {
    let currentValue;
    if (!this.length) {
      currentValue = null;
    } else if (this.length > 1) {
      currentValue = this.top.value;
      const nextNode = this.top.next;
      this.top = nextNode;
      this.length--;
    } else {
      currentValue = this.top.value;
      this.top = null;
      this.bottom = null;
      this.length--;
    }
    return currentValue;
  }

  isEmpty() {
    return !this.length
  }
}

const stack = new Stack();
console.log(stack.peek())
console.log(stack.isEmpty());
console.log(stack.length);
console.log(stack.printList());
stack.push('google');
stack.push('udemy');
stack.push('stackoverflow');
console.log(stack.isEmpty());
console.log(stack.length);
console.log(stack.printList());
stack.pop();
console.log(stack.isEmpty());
console.log(stack.length);
console.log(stack.printList());
stack.pop();
stack.pop();
console.log(stack.isEmpty());
console.log(stack.length);
console.log(stack.printList());
