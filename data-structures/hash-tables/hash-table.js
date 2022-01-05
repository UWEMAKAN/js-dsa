class HashTable {
  constructor(size){
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
        hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    const address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
  }

  get(key) {
    const address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (const item of currentBucket) {
        if (item[0] === key) {
          return item[1];
        }
      }
    }
    return undefined;
  }

  keys() {
    const keysArray = [];
    for (const item of this.data) {
      if (item) {
        for (const entry of item) {
          const key = entry[0];
          keysArray.push(key);
        }
      }
    }
    return keysArray;
  }

  values() {
    const valuesArray = [];
    for (const item of this.data) {
      if (item) {
        for (const entry of item) {
          const value = entry[1];
          valuesArray.push(value);
        }
      }
    }
    return valuesArray;
  }

  entries() {
    const entriesArray = [];
    for (const item of this.data) {
      if (item) {
        for (const entry of item) {
          entriesArray.push(entry);
        }
      }
    }
    return entriesArray;
  }
}

const myHashTable = new HashTable(2);
myHashTable.set('grapes', 10000)
const grapes = myHashTable.get('grapes')
myHashTable.set('apples', 9)
const apples = myHashTable.get('apples')
myHashTable.set('oranges', 24);
const oranges = myHashTable.get('oranges');
console.log(`grapes = ${grapes}`, `apples = ${apples}`, `oranges = ${oranges}`);
const keys = myHashTable.keys();
console.log(`keys: ${keys}`);
const values = myHashTable.values();
console.log(`values: ${values}`);
const entries = myHashTable.entries();
console.log(`entries: ${entries}`);