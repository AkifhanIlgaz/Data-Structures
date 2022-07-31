// Stack data structure in Javascript with Array

class ArrayStack {
  constructor() {
    this.stack = [];
  }

  push(element) {
    return this.stack.push(element);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  clear() {
    this.stack.length = 0;
  }

  size() {
    return this.stack.length;
  }
}

function decimalToBinary(number) {
  let remstack = new ArrayStack();
  let num = number;
  let rem;
  let binaryString = "";

  while (num > 0) {
    rem = Math.floor(num % 2);
    remstack.push(rem);
    num = Math.floor(num / 2);
  }

  while (remstack.size() !== 0) {
    binaryString += remstack.pop().toString();
  }
  return binaryString;
}

console.log(decimalToBinary(41));
