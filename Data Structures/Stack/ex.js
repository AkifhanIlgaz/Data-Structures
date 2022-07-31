class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
    return this;
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  clear() {
    this.items.length = [];
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.toString());
  }
}

function decimalToBinary(number) {
  const remStack = new Stack();
  let binaryString = "";
  while (number != 0) {
    remStack.push(number % 2);
    number = Math.floor(number / 2);
  }

  while (!remStack.isEmpty()) {
    binaryString += remStack.pop();
  }
  return binaryString;
}

function baseConverter(decNumber, base) {
  const remStack = new Stack();
  let baseString = "";
  let digits = "0123456789ABCDEF";

  while (decNumber > 0) {
    remStack.push(decNumber % base);
    decNumber = Math.floor(decNumber / base);
  }

  while (!remStack.isEmpty()) {
    baseString += digits[remStack.pop()];
  }

  return baseString;
}

