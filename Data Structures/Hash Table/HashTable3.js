class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.numItems = 0;
    this.size = size;
  }

  // Hash function will determine where the data will be stored
  // Hash function will convert the "key" parameter which is a string into a integer. So that we determine where our data will be stored.
  // Very basic hash function that sums ASCII values of characters and returns "sum % size"
  hash(key) {
    // We have used prime number as a starting point to spread out where the values are stored
    let hash = 23;
    for (let i = 0; i < key.length; i++) {
      hash *= 13 * key.charCodeAt(i);
    }
    return hash % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    if (this.table[index]) {
      this.table[index].push([key, value]);
    } else {
      this.table[index] = [[key, value]];
    }
  }

  get(key) {
    const index = this.hash(key);

    if (!this.table[index]) {
      return null;
    }

    return this.table[index].find((element) => element[0] === key)[1];

    // if (this.table[index]) {
    //   for (let i = 0; i < this.table[index]; i++) {
    //     if (this.table[index][i][0] === key) {
    //       return this.table[index][i][1];
    //     }
    //   }
    //   return null;
    // }
    // return null;
  }
}

const hashTable = new HashTable(100);

hashTable.set("France", 111);
hashTable.set("Spain", 150);
hashTable.set("Age", 5);
hashTable.set("Dob", "1/2/3");

console.log(hashTable.table);

console.log(hashTable.get("France"));
console.log(hashTable.get("Spain"));
console.log(hashTable.get("Age"));
console.log(hashTable.get("Dob"));
