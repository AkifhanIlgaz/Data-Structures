const myArray = [1, 2, 3, 4, 5, 6];

function push(element) {
  // myArray.push(element)

  myArray[myArray.length] = element;
}

function unshift(element) {
  // myArray.unshift(element)
  for (let i = myArray.length; i >= 0; i--) {
    myArray[i] = myArray[i - 1];
  }
  myArray[0] = element;
}

function pop() {
  // myArray.pop()
  myArray.length = myArray.length - 1;
}

function shift() {
  // myArray.shift()

  for (let i = 0; i < myArray.length; i++) {
    myArray[i] = myArray[i + 1];
    console.log(myArray);
  }
}

function concat(additionArray) {
  // myArray.concat(additionArray);
  for (let i = 0; i < additionArray.length; i++) {
    myArray.push(additionArray[i]);
  }

  //   additionArray.forEach((element) => {
  //     myArray.push(element);
  //   });
}

function isEven(number) {
  return number % 2 === 0;
}

function every(callbackFunction) {
  // myArray.every(callbackFunction)
  // myArray.every((number) => number %2 === 0);
  for (let i = 0; i < myArray.length; i++) {
    if (callbackFunction(myArray[i]) === false) {
      return false;
    }
  }
  return true;
}

function some(callbackFunction) {
  // myArray.some(callbackFunction);
  // myArray.some((element) => number % 2 === 0);
  for (let i = 0; i < myArray.length; i++) {
    if (callbackFunction(myArray[i]) === true) true;
  }
  return false;
}

function forEach(callbackFunction) {
  // myArray.forEach(callbackFunction)
  // myArray.forEach((element) => console.log(element*2))
  for (let i = 0; i < myArray.length; i++) {
    callbackFunction(myArray[i]);
  }
}

function map(callbackFunction) {
  // myArray.map(callbackFunction)
  // myArray.map((element) => element *2 )
  let newArray = [];

  for (let i = 0; i < myArray.length; i++) {
    newArray.push(callbackFunction(myArray[i]));
  }

  // myArray.forEach((element) => {
  //   newArray.push(element * 2);
  // });
  return newArray;
}

function filter(callbackFunction) {
  // myArray.filter(callbackFunction)
  // myArray.filter((element) => element % 2 === 0)
  let newArray = [];

  for (let i = 0; i < myArray.length; i++) {
    if (callbackFunction(myArray[i]) === true) {
      newArray.push(myArray[i]);
    }
  }

  // myArray.forEach((element) => {
  //   if (element % 2 === 0) {
  //     newArray.push(element);
  //   }
  // });
  return newArray;
}

function reduce(callbackFunction, initialvalue = 0) {
  // myArray.reduce(callbackFunction, initialValue);

  // myArray.reduce((sum, element) => sum+ element , 0)
  let accumulator = initialvalue;

  for (let i = 0; i < myArray.length; i++) {
    accumulator = callbackFunction(accumulator, myArray[i]);
  }

  return accumulator;
}
// for of => iteraters over values
function forof() {
  for (let number of myArray) {
    console.log(number * 2);
  }
}

// for in-dex => iterates over indexes
function forin() {
  for (let index of myArray) {
    console.log(index * 2);
  }
}

function from(callbackFunction = 0) {
  // Array.from(myArray,callbackFunction)
  // const newArray = Array.from(myArray, (number) => number *2 )

  let newArray = [];

  if (callbackFunction === 0) {
    for (let number of myArray) {
      newArray.push(number);
    }
  } else {
    for (let number of myArray) {
      newArray.push(callbackFunction(number));
    }
  }
  return newArray;
}

function fill(arr, value, startingIndex = 0, endIndex = 0) {
  if (endIndex) {
    for (let i = startingIndex; i < endIndex; i++) {
      arr[i] = value;
    }
    return arr;
  }
  for (let i = startingIndex; i < myArray.length; i++) {
    arr[i] = value;
  }
  return arr;
}

function find(arr, callbackFunction) {
  // myArray.find(callbackFunction)
  // Returns the first value that satisfies the condition
  for (let element of arr) {
    if (callbackFunction(element) === true) {
      return element;
    }
  }
}

function findIndex(arr, callbackFunction) {
  // myArray.findIndex(callbackFunction)
  // Returns the index of the first value that satisfied the condition

  for (let index in arr) {
    if (callbackFunction(arr[index]) === true) {
      return index;
    }
  }
}

function includes(arr, value, startingIndex = 0) {
  // myArray.includes(value, startingIndex)
  for (let i = startingIndex; i < arr.length; i++) {
    if (arr[i] === value) return true;
  }
  return false;
}

function toString(arr) {
  let string = "";

  for (let i = 0; i < arr.length - 1; i++) {
    string += `${arr[i]},`;
  }
  string += arr[arr.length - 1];

  return string;
}

function join(arr, separator) {
  let string = "";

  for (let i = 0; i < arr.length - 1; i++) {
    string += `${arr[i]}${separator}`;
  }

  string += arr[arr.length - 1];
  return string;
}
