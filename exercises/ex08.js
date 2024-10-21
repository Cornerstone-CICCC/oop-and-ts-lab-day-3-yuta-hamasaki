// Create a function called deleteAllNodesWithValue that removes all nodes with a specific value from the DLL
// Make sure to update the size of the list as well

const DLL = require('../lib/DLL');

function deleteAllNodesWithValue(list, value) {
  let current = list.getHead();
  let nodesDeleted = 0;

  while (current !== null) {
    if (current.data === value) {
      if (current === list.getHead()) {
        list.setHead(current.next);
        if (list.getHead()) {
          list.getHead().prev = null;
        } else {
          list.setTail(null);
        }
      } else if (current === list.getTail()) {
        list.setTail(current.prev);
        list.getTail().next = null;
      } else {
        current.prev.next = current.next;
        current.next.prev = current.prev;
      }
      nodesDeleted++;
    }
    current = current.next;
  }

  list.setSize(list.length() - nodesDeleted);

}

const list = new DLL();
list.insertAtBack(1);
list.insertAtBack(2);
list.insertAtBack(3);
list.insertAtBack(2);
list.insertAtBack(5);

deleteAllNodesWithValue(list, 2);
console.log(list.print()); // Output: 1 <-> 3 <-> 5