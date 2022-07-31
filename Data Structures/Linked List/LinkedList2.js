const { captureRejectionSymbol } = require("eth-provider/ConnectionManager");
const { ConstructorFragment, joinSignature } = require("ethers/lib/utils");

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);

    if (this.head == null) {
      this.head = newNode;
      return this;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  insert(index, value) {
    this.length++;
    const newNode = new Node(value);

    let previousNode = this.head;

    for (let i = 1; i < index; i++) {
      previousNode = previousNode.next;
    }

    newNode.next = previousNode.next;
    previousNode.next = newNode;

    return this;
  }

  deleteHead() {
    this.head = this.head.next;
    this.length--;
    return this;
  }

  deleteTail() {
    let currentNode = this.head;

    while (currentNode.next.next != null) {
      currentNode = currentNode.next;
    }
    currentNode.next = null;
    this.tail = currentNode;
    this.length--;
    return this;
  }

  deleteAtIndex(index) {
    if (index === 0) {
      return this.deleteHead();
    }

    let count = 1;
    let previousNode = this.head;

    while (count < index) {
      previousNode = previousNode.next;
      count++;
    }

    previousNode.next = previousNode.next.next;
    this.length--;
    return this;
  }

  deleteNodeByValue(value) {
    let index = 0;
    let current = this.head;

    while (current.value != value) {
      current = current.next;
      index++;
    }

    return this.deleteAtIndex(index);
  }

  searchElement(value) {
    let currentNode = this.head;

    while (currentNode != null) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  print() {
    let printArrayList = [];

    let currentNode = this.head;

    while (currentNode) {
      printArrayList.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return printArrayList.join(" => ");
  }
}
console.log("Creating a LinkList at constant time O(1): 20:");
const myLinkedList = new LinkedList(20);
console.log(myLinkedList.print());
console.log("");

console.log("Appendding Node at constant time O(1): 40 -> 50:");
myLinkedList.append(40).append(50);
console.log(myLinkedList.print());
console.log("");

console.log("Prepending Node at constant time O(1): 10:");
myLinkedList.prepend(10);
console.log(myLinkedList.print());
console.log("");

console.log("Inserting Node at index 2 with time complexty of O(n): 30");
myLinkedList.insert(2, 30);
console.log(myLinkedList.print());
console.log("Inserting at index 1: 15");
myLinkedList.insert(1, 15);
console.log(myLinkedList.print());
console.log("");

console.log("Deleting Head-Node at constant time O(1): 10:");
myLinkedList.deleteHead();
console.log(myLinkedList.print());
console.log("");

console.log("Deleting Tail-Node at O(n) time: 50:");
myLinkedList.deleteTail();
console.log(myLinkedList.print());
console.log("");

console.log("Deleting Node at index 2 with time complexty of O(n): 30:");
myLinkedList.deleteAtIndex(2);
console.log(myLinkedList.print());
console.log("");

console.log("Deleting Node with value 40 with time complexty of O(n):");
myLinkedList.deleteNodeByValue(40);
console.log(myLinkedList.print());
console.log("");

console.log("Searching for value 20 with time complexty of O(n):");
console.log(myLinkedList.print());
console.log(myLinkedList.searchElement(20));
console.log("Searching for value 50 with time complexty of O(n):");
console.log(myLinkedList.searchElement(50));

function squareAppend(times) {
  const linkedlist = new LinkedList(1);

  for (let i = 1; i <= times; i++) {
    linkedlist.append(2 ** i);
  }

  console.log(linkedlist.print());
}
