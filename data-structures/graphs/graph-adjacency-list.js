class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  get numberOfNodes() {
    return this.adjacencyList.size;
  }

  addVertex(node) {
    this.adjacencyList.set(node, new Set());
  }

  addEdge(node1, node2) {
    if (this.adjacencyList.has(node1) && this.adjacencyList.has(node2)) {
      this.adjacencyList.get(node1).add(node2);
      this.adjacencyList.get(node2).add(node1);
    }
  }

  showConnections() {
    for (const [key, value] of this.adjacencyList) {
      console.log(`${key}-->${[...value].join(' ')}`);
    }
  }
}

const graph = new Graph();
graph.addVertex('0');
graph.addVertex('1');
graph.addVertex('2');
graph.addVertex('3');
graph.addVertex('4');
graph.addVertex('5');
graph.addVertex('6');
graph.addEdge('3', '1');
graph.addEdge('3', '4');
graph.addEdge('4', '2');
graph.addEdge('4', '5');
graph.addEdge('1', '2');
graph.addEdge('1', '0');
graph.addEdge('0', '2');
graph.addEdge('6', '5');
graph.showConnections();
