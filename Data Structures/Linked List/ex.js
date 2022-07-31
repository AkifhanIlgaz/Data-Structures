class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insertToTail(data) {
    this.length++;
    const newNode = new Node(data);

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
      const oldTail = this.tail;
      const currentNode = this.head;

      while (currentNode.next != oldTail) {
        currentNode = currentNode.next;
      }

      const newTail = currentNode;
      newTail.next = null;
      this.tail = newTail;
      return oldTail;
    }

    return undefined;
  }

  insertToHead(data) {
    this.length++;
    const newNode = new Node(data);

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
      this.head = this.head.next;
      return removedNode;
    }

    return undefined;
  }

  insertIndex(data, index) {
    if (index > this.length) {
      throw new Error("Index out of bounds");
    }

    if (index === 0) {
      return this.insertToHead(data);
    } else if (index === this.length) {
      return this.insertToTail(data);
    }

    let previousNode = null;
    let currentNode = this.head;

    for (let i = 0; i < index; i++) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    const newNode = new Node(data);
    newNode.next = currentNode;
    previousNode.next = newNode;
    this.length++;
    return newNode;
  }

  removeIndex(index) {
    if (index >= this.length) {
      throw new Error("Index out of bounds");
    } else if (index === 0) {
      return this.removeFromHead();
    } else if (index === this.length - 1) {
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
    let currentNode = this.head;

    while(currentNode) {
      console.log(currentNode);
      currentNode = currentNode.next;
    }
  }
}
