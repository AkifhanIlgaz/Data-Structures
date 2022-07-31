const phoneBook = new Map();

phoneBook.set("Sam", "99912222");
phoneBook.set("Tom", "11122222");
phoneBook.set("Harry", "12299933");

const input = ["Sam", "Edward", "Harry"];

function check(listOfNames) {
  listOfNames.forEach((name) => {
    if (phoneBook.get(name) === undefined) {
      console.log("Not found");
      return;
    }
    console.log(`${name}=${phoneBook.get(name)}`);
  });
}

check(input);
