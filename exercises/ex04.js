// Create a function called isPalindrome that checks if the elements in the queue form a palindrome
// A palindrome reads the same forwards and backwards (e.g., 1 2 3 2 1)
// Make sure to implement the Queue principle (FIFO)

const Queue = require('../lib/Queue');

function isPalindrome(queue) {
  const originalSize = queue.size();
  const halfSize = Math.floor(originalSize / 2);
  const tempStack = [];

  for (let i = 0; i < halfSize; i++) {
    const element = queue.dequeue();
    tempStack.push(element);
    queue.enqueue(element);
  }
  if (originalSize % 2 !== 0) {
    const middleElement = queue.dequeue();
    queue.enqueue(middleElement);
  }

  for (let i = 0; i < halfSize; i++) {
    const queueElement = queue.dequeue();
    const stackElement = tempStack.pop();

    if (queueElement !== stackElement) {
      queue.enqueue(queueElement);
      while (tempStack.length > 0) {
        queue.enqueue(tempStack.pop());
      }
      while (queue.size() < originalSize) {
        queue.enqueue(queue.dequeue());
      }
      return false;
    }
    queue.enqueue(queueElement);
  }
  while (queue.size() < originalSize) {
    queue.enqueue(queue.dequeue());
  }
  return true;
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(2);
queue.enqueue(1);

console.log(isPalindrome(queue)); // true