class HashTable {
  constructor() {
    this.table = {};
    this.size = 0;
    this.length = 0;
  }

  hash(key) {
    return key.toString().length % this.size;
  }

  set(key, value) {
    const hash = this.hash(key);
    if (!this.table.hasOwnProperty(hash)) {
      this.table[hash] = {};
    }
    if (!this.table[hash].hasOwnProperty(key)) {
      this.length++;
    }

    this.table[hash][key] = value;
  }

  get(key) {
    const hash = this.hash(key);

    if (
      this.table.hasOwnProperty(hash) &&
      this.table[hash].hasOwnProperty(key)
    ) {
      return this.table[hash][key];
    } else {
      return null;
    }
  }
}

const ht = new HashTable();

ht.set("Canada", "300");
ht.set("Germany", "100");
ht.set("Italy", "50");

console.log(ht.get("Italy"));

console.log(ht.get("USA"));
