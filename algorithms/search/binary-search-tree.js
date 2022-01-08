class QueueNode {
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
    const newNode = new QueueNode(value);
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


class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
    this.size = 0;
  }

  printTree() {
    const levels = Math.log2(this.size + 1);
    const tree = [[this.root.value]];
    const { left, right } = this.root;
    this.traversePrint(left, tree, 1);
    this.traversePrint(right, tree, 1);
    return { tree, size: this.size };
  }

  traversePrint(node, list, level) {
    if (node) {
      const { left, right } = node;
      if (!list[level]) {
        list[level] = [];
      }
      list[level].push(node.value);
      this.traversePrint(left, list, level + 1);
      this.traversePrint(right, list, level + 1);
    }
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while(currentNode) {
        if (newNode.value < currentNode.value) {
          if (currentNode.left) {
            currentNode = currentNode.left;
          } else {
            currentNode.left = newNode;
            currentNode = null;
          }
        } else if (newNode.value >= currentNode.value) {
          if (currentNode.right) {
            currentNode = currentNode.right;
          } else {
            currentNode.right = newNode;
            currentNode = null;
          }
        }
      }
    }
    this.size++;
  }

  lookup(value) {
    if (this.root.value === value) {
      return true;
    } else {
      let currentNode = this.root;
      while(currentNode) {
        if (currentNode.value > value) {
          if (currentNode.left) {
            currentNode = currentNode.left;
          } else {
            currentNode = null;
          }
        } else if (currentNode.value < value) {
          if (currentNode.right) {
            currentNode = currentNode.right;
          } else {
            currentNode = null;
          }
        } else {
          return true;
        }
      }
      return false;
    }
  }

  remove(value) {
    if (!this.root) {
      return null;
    } else {
      let currentNode = this.root;
      while (currentNode) {
        if (currentNode.value < value) {
          currentNode = currentNode.right;
        } else if (currentNode.value > value) {
          currentNode = currentNode.left;
        } else if (currentNode.value === value) {
          this.reOrder(currentNode);
          this.size--;
        }
      }
    }
  }

  reOrder(currentNode) {
    if (!currentNode) {
      return;
    }
    if (!currentNode.right && !currentNode.left) {
      currentNode = null;
    } else if (!currentNode.right && currentNode.left) {
      currentNode = currentNode.left;
    } else if (currentNode.right && !currentNode.left) {
      currentNode = currentNode.right;
    } else {
      if (currentNode.right.left) {
        currentNode.value = currentNode.right.left.value;
        if (!currentNode.right.left.right && !currentNode.right.left.left) {
          currentNode.right.left = null;
        }
        this.reOrder(currentNode.right.left);
      } else if(currentNode.left.right) {
        currentNode.value = currentNode.left.right.value;
        if (!currentNode.left.right.right && !currentNode.left.right.left) {
          currentNode.left.right = null;
        }
        this.reOrder(currentNode.left.right);
      }
    }
  }

  breadthFirstSearch() {
    let currentNode = this.root;
    const arr = [];
    const queue = [];
    queue.push(currentNode);
    while(queue.length > 0) {
      currentNode = queue.shift();
      arr.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return arr;
  }

  breadthFirstSearchRecursive(queue, arr) {
    if (!queue.length) {
      return arr;
    }
    const currentNode = queue.dequeue();
    arr.push(currentNode.value);
    if (currentNode.left) {
      queue.enqueue(currentNode.left);
    }
    if (currentNode.right) {
      queue.enqueue(currentNode.right);
    }
    return this.breadthFirstSearchRecursive(queue, arr);
  }

  breadthFirstSearchRecursiveArray(queue, arr) {
    if (!queue.length) {
      return arr;
    }
    const currentNode = queue.shift();
    arr.push(currentNode.value);
    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
    return this.breadthFirstSearchRecursiveArray(queue, arr);
  }

  DFSInOrder() {
    return this.root && this.traverseInOrder(this.root, []);
  }

  DFSPreOrder() {
    return this.root && this.traversePreOrder(this.root, []);
  }

  DFSPostOrder() {
    return this.root && this.traversePostOrder(this.root, []);
  }

  traverseInOrder(node, arr) {
    if (node.left) {
      this.traverseInOrder(node.left, arr);
    }
    arr.push(node.value);
    if (node.right) {
      this.traverseInOrder(node.right, arr);
    }
    return arr;
  }

  traversePreOrder(node, arr) {
    arr.push(node.value);
    if (node.left) {
      this.traversePreOrder(node.left, arr);
    }
    if (node.right) {
      this.traversePreOrder(node.right, arr);
    }
    return arr;
  }

  traversePostOrder(node, arr) {
    if (node.left) {
      this.traversePostOrder(node.left, arr);
    }
    if (node.right) {
      this.traversePostOrder(node.right, arr);
    }
    arr.push(node.value);
    return arr;
  }
}



const tree = new BinarySearchTree();

tree.insert(12);
tree.insert(4);
tree.insert(50);
tree.insert(1);
tree.insert(6);
tree.insert(20);
tree.insert(70);
tree.insert(5);
tree.insert(10);
tree.insert(15);
tree.insert(25);
tree.insert(55);
tree.insert(78);
tree.insert(8);
tree.insert(11);
tree.insert(52);
tree.insert(60);
tree.insert(75);
tree.insert(80);
tree.insert(7);
tree.insert(9);
tree.insert(51);
tree.insert(54);
tree.insert(57);
tree.insert(68);
tree.insert(50);
// const pa1 = performance.now();
// const r1 = tree.breadthFirstSearch();
// const pa2 = performance.now();
// console.log(pa2 - pa1);

// const queue = new Queue();
// queue.enqueue(tree.root);
// const pb1 = performance.now();
// const r2 = tree.breadthFirstSearchRecursive(queue, []);
// const pb2 = performance.now();
// console.log(pb2 - pb1);

// const pc1 = performance.now();
// const r3 = tree.breadthFirstSearchRecursiveArray([tree.root], []);
// const pc2 = performance.now();
// console.log(pc2 - pc1);

// console.log(tree.DFSInOrder());
// console.log(tree.DFSPreOrder());
console.log(tree.DFSPostOrder());