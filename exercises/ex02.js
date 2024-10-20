// Create a function called removeBetween that removes all elements between two unique elements
// Make sure to implement the Stack principle (LIFO)

const Stack = require('../lib/Stack');

function removeBetween(a, b) {
  const tStack = new Stack()
  let find = false

  while (!fruits.isEmpty()) {
    let top = fruits.pop();

    if (top === a) {
      find = true;
      tStack.push(top); 
    } else if (top === b) {
      find = false;
      tStack.push(top);
    } else if (!find) {
      tStack.push(top)
    }
  }

  while (!tStack.isEmpty()){
    fruits.push(tStack.pop())
  }

}

const fruits = new Stack();
fruits.push("Apple");
fruits.push("Banana");
fruits.push("Cherry");
fruits.push("Date");
fruits.push("Elderberry");

removeBetween("Banana", "Elderberry");
console.log(fruits.printStack()); // Apple Banana Elderberry