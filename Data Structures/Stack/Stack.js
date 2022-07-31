//A classsical approach

class ClassicStack {
  constructor() {
    this.stack = [];
    this.top = 0;
  }

  push(element) {
    stack[this.top++] = element;
  }

  pop() {
    return stack[--this.top];
  }

  peek() {
    return stack[this.top - 1];
  }

  isEmpty() {
    return this.top === 0;
  }

  clear() {
    this.top = 0;
  }

  size() {
    return this.top;
  }
}

var stack = new ClassicStack(); //creating new instance of Stack
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack.size());
console.log(stack.pop());
console.log(stack.size());
stack.clear();
console.log(stack.isEmpty());

// Stack data structure in Javascript with Array

class ArrayStack {
  constructor() {
    this.stack = [];
  }

  push(element) {
    this.stack.push(element);
  }

  pop() {
    this.stack.pop();
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
