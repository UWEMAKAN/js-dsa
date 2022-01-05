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

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      this.size++;
    } else {
      this.traverseInsert(this.root, newNode);
      this.size++;
    }
  }

  remove(value) {
    this.traverseRemove(this.root, value);
  }

  lookup(value) {
    return this.traverse(this.root, value);
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

  traverseInsert(currentNode, newNode) {
    if (currentNode.value > newNode.value) {
      if (currentNode.left) {
        this.traverseInsert(currentNode.left, newNode);
      } else {
        currentNode.left = newNode;
      }
    } else if (currentNode.value < newNode.value) {
      if (currentNode.right) {
        this.traverseInsert(currentNode.right, newNode);
      } else {
        currentNode.right = newNode;
      }
    }
  }

  traverseRemove(currentNode, value, previousNode) {
    const { left, right } = currentNode;
    if (currentNode.value > value && left) {
      this.traverseRemove(left, value);
    } else if (currentNode.value < value && right) {
      this.traverseRemove(right, value);
    } else if (currentNode.value === value) {
      if (left) {
        currentNode.value = left.value;
        currentNode.left = this.reOrder(left);
      } else {
        currentNode.value = right.value;
        currentNode.right = this.reOrder(right);
      }
      this.size--;
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

  traverse(currentNode, value) {
    let found = false;
    if (currentNode) {
      const { left, right } = currentNode;
      if (currentNode.value === value) {
        found = true;
      }
      else if (currentNode.value > value && left) {
        found = this.traverse(left, value);
      } else if (currentNode.value < value && right) {
        found = this.traverse(right, value);
      }
      return found;
    }    
  }
}

const tree = new BinarySearchTree();

tree.insert(12);
tree.insert(4);
tree.insert(20);
tree.insert(1);
tree.insert(6);
tree.insert(15);
tree.insert(170);
tree.insert(5);
tree.insert(10);
tree.insert(8);
tree.insert(11);
tree.insert(7);
tree.insert(9);

// console.log(tree.printTree());
// console.log('lookup 12', tree.lookup(12));
// console.log('lookup 7', tree.lookup(7));
// console.log('lookup 8', tree.lookup(8));
// console.log(tree.printTree());
// tree.remove(4);
// tree.remove(10);
// console.log('lookup 200', tree.lookup(200));
console.log(tree.printTree());
