class Queue {
  constructor() {
    this.first = [];
    this.last = [];
  }

  enqueue(value) {
    this.last.push(value);
    this.first = [...this.last];
    this.first.reverse();
  }

  dequeue() {
    const value = this.first.pop();
    this.last = [...this.first];
    this.last.reverse();
    return value;
  }

  peek() {
    return this.last[0];
  }

  get empty() {
    return !this.first.length;
  }

  get length() {
    return this.last.length;
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);
console.log(queue);
console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue);
