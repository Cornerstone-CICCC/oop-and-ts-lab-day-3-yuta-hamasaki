// Create a function called insertAfterTarget that inserts a new element after a target element
// Make sure to implement the Stack principle (LIFO)

const Stack = require('../lib/Stack');

function insertAfterTarget(target, newElement) {
  const tempStack = new Stack();
  let found = false;

  while (stack.size() > 0) {
    let current = stack.pop();
    tempStack.push(current);

    if (current === target) {
      tempStack.push(newElement);
      found = true;
      break;
    }
  }

  while (stack.size() > 0) {
    tempStack.push(stack.pop());
  }

  while (tempStack.size() > 0) {
    stack.push(tempStack.pop());
  }

  if (!found) {
    const finalTempStack = new Stack();
    while (stack.size() > 0) {
      let current = stack.pop();
      if (current !== newElement) {
        finalTempStack.push(current);
      }
    }
    while (finalTempStack.size() > 0) {
      stack.push(finalTempStack.pop());
    }
  }
}

const stack = new Stack();
stack.push("A");
stack.push("B");
stack.push("C");
stack.push("D");

insertAfterTarget("B", "X");
console.log(stack.printStack()); // A B X C D