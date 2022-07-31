/* 
    Big O Notation is used in Computer Science to describe the performance or complexity of an algorithm.
*/

const { FallbackProvider } = require("@ethersproject/providers");

/* 
    O(1)
  Describes an algorithm that will always execute in the same time or space regardless of the size of the given input.    
*/

function isFirstElementNull(elements) {
  return elements[0] === null;
}

/* 
    O(n)
  Describes an algorithm whose performance will grow linearly and in direct proportion to the size of given input  
*/

// Big O notation will always consider the worst case scenario.
// The value we are looking might appear in the beginning of the array but we assume that the value is the last element

function containsValue(elements, value) {
  //   for (let i = 0; i < elements.length; i++) {
  //     if (elements[i] === value) {
  //       return true;
  //     }
  //   }
  //   return false;
  return elements.includes(value);
}

/* 
    O(n^2)
  Describes an algorithm whose performance is directly proportional to the square of the size of the input data set.
  This is common with the algoriths that includes nested loops over the data set.Deeper nested loops will result in O(n^3),O(n^4) etc.
*/

function containsDuplicates(elements) {
  for (let outer = 0; outer < elements.length; outer++) {
    for (let inner = 0; inner < elements[outer].length; inner++) {
      if (outer == inner) continue;

      if (elements[outer] == elements[inner]) {
        return true;
      }
    }
  }
  return false;
}

/* 
    O(2^n)
  Describes  an algorithm whose growth doubles with each addition to the input data set.
  The growth curve of an O(2^n) function is exponential - starting of very shallow, the rising meteorically.  
*/

function fibonacci(number) {
  if (number <= 1) number;

  return fibonacci(number - 2) + fibonacci(number - 1);
}
