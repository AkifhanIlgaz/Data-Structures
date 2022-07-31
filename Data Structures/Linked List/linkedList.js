class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insertToTail(value) {
    let newNode = new Node(value);
    this.length++;

    if (this.tail) {
      this.tail.next = newNode;
      this.tail = newNode;
      return newNode;
    }

    this.head = this.tail = newNode;
    return newNode;
  }

  removeFromTail() {
    if (this.tail) {
      this.length--;

      const tailNode = this.tail;

      let currentNode = this.head;

      while (this.head.next != tailNode) {
        currentNode = currentNode.next;
      }

      const newTail = currentNode;
      this.tail = newTail;
      this.tail.next = null;
      return tailNode;
    }
    return undefined;
  }

  insertToHead(value) {
    this.length++;
    const newNode = new Node(value);

    if (this.head) {
      newNode.next = this.head;
      this.head = newNode;
      return newNode;
    }

    this.head = this.tail = newNode;
    return newNode;
  }

  removeFromHead() {
    if (this.head) {
      this.length--;
      const removedNode = this.head;
      const newHead = this.head.next;
      this.head = newHead;
      return removedNode;
    }
    return undefined;
  }

  insertIndex(value, index) {
    if (index >= this.length) {
      throw new Error("Insert index out of bounds");
    }

    if (index === 0) {
      return this.insertToHead(value);
    }

    let previousNode = null;
    let currentNode = this.head;

    for (let i = 0; i < index; i++) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    const newNode = new Node(value);
    newNode.next = currentNode;
    previousNode.next = newNode;
    this.length++;
    return newNode;
  }

  removeIndex(index) {
    if (index >= this.length) {
      throw new Error("Remove index out of bounds");
    }

    if (index === 0) {
      return this.removeFromHead();
    }

    if (index === this.length - 1) {
      return this.removeFromTail();
    }

    let previousNode = null;
    let currentNode = this.head;

    for (let i = 0; i < index; i++) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    previousNode.next = currentNode.next;
    this.length--;
    return currentNode;
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const linkedList = new LinkedList();

linkedList.insertToTail("Zozak");
linkedList.insertToHead(true);
linkedList.insertToTail("77");
linkedList.print();
linkedList.insertIndex(20, 0);
linkedList.print();
