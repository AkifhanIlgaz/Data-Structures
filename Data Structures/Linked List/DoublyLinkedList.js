class DoubleNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insert(value) {
    this.length++;
    const newNode = new DoubleNode(value);

    if (this.tail) {
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
      return newNode;
    }
    this.head = this.tail = newNode;
    return newNode;
  }

  remove() {
    if (this.tail) {
      const removedNode = this.tail;
      this.length--;

      this.tail = this.tail.previous;

      if (this.tail) {
        this.tail.next = null;
      } else {
        this.head = null;
      }
      return removedNode;
    }

    return undefined;
  }

  insertHead(value) {
    this.length++;

    const newNode = new DoubleNode(value);

    if (this.head) {
      this.head.previous = newNode;
      newNode.next = this.head;
      this.head = newNode;
      return newNode;
    }
    this.head = this.tail = newNode;
    return newNode;
  }

  removeHead() {
    if (this.head) {
      this.length--;
      const removedNode = this.head;
      this.head = this.head.next;
      if (this.head) {
        this.head.previous = null;
      } else {
        this.tail = null;
      }
      return removedNode;
    }
    return undefined;
  }

  insertIndex(value, index) {
    if (index >= this.length) {
      throw new Error("Index out of bounds");
    }
    if (index === 0) {
      return this.insertHead(value);
    }

    this.length++;
    let currentNode = this.head;
    const newNode = new DoubleNode(value);

    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }

    const previousNode = currentNode.previous;
    newNode.next = currentNode;
    newNode.previous = previousNode;
    previousNode.next = newNode;
    currentNode.previous = newNode;

    return newNode;
  }

  removeIndex(index) {
    if (index >= this.length) {
      throw new Error("Remove index out of bounds");
    }

    if (index === 0) {
      return this.removeHead();
    }

    this.length--;
    let currentNode = this.head;

    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }

    const previousNode = currentNode.previous;
    const nextNode = currentNode.next;

    nextNode.previous = previousNode;
    previousNode.next = nextNode;
    return currentNode;
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(
        `${current.previous?.value} ${current.value} ${current.next?.value}`
      );
      current = current.next;
    }
  }
}

const dLinkedList = new DoublyLinkedList();

dLinkedList.insert(7);
dLinkedList.insert(8);
dLinkedList.insert(9);
dLinkedList.print();
