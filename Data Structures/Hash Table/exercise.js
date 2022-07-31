class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.numItems = 0;
    this.size = size;
  }

  hash(key) {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }

    return hash % this.size;
  }

  set(key, value) {
    this.numItems++;
    let index = this.hash(key);

    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === key) {
          this.table[index][i][1] = value;
          return true;
        }
      }
      this.table[index].push([key, value]);
    } else {
      this.table[index] = [];
      this.table[index].push([key, value]);
    }
  }

  get(key) {
    const index = this.hash(key);

    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][0] === key) {
          return this.table[index][1];
        }
      }
    }
    return undefined;
  }

  remove(key) {
    const index = this.hash(key);

    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][0] === key) {
          this.table[index][i] = undefined;
          return true;
        }
      }
    }
    return "Not found";
  }

  display() {
    this.table.forEach((innerArrays, index) => {
      const chainedValues = innerArrays.map(([key, value]) => {
        return `[ ${key}: ${value} ]`;
      });
      console.log(`${index}: ${chainedValues}`);
    });
  }
}

const ht = new HashTable(200);

ht.set("France", 111);
ht.set("Spain", 150);
ht.set("ǻ", 192);

ht.display();
// 83: [ France: 111 ]
// 126: [ Spain: 150 ],[ ǻ: 192 ]

console.log(ht.size); // 3
ht.remove("Spain");
ht.display();
// 83: [ France: 111 ]
// 126: [ ǻ: 192 ]
