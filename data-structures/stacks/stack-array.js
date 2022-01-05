class Stack {
  constructor() {
    this.data = [];
  }

  printList() {
    return this.data.reverse();
  }

  peek() {
    const { length } = this.data;
    return length ? this.data[length - 1] : null;
  }

  push(value) {
    this.data.push(value);
  }

  pop() {
    return this.data.pop();
  }

  isEmpty() {
    return !this.data.length;
  }

  get length() {
    return this.data.length;
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