// class Node {
//   constructor(data, next = null) {
//     this.data = data;
//     this.next = next;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.size = 0;
//   }

//   // Insert First
//   insertFirst(data) {
//     this.head = new Node(data, this.head);
//     this.size++;
//   }

//   // Insert Last
//   insertLast(data) {
//     let node = new Node(data);
//     let current;

//     if (!this.head) {
//       this.head = node;
//     } else {
//       current = this.head;
//       while (current.next) {
//         current = current.next;
//       }
//       current.next = node;
//     }
//     this.size++;
//   }

//   // Insert at index

//   insertAt(data, index) {
//     // not exist the index
//     if (index > 0 && index > this.size) {
//       return;
//     }
//     // first index
//     if (index === 0) {
//       this.insertFirst(data);
//       return;
//     }

//     const node = new Node(data);
//     let current, previous;

//     current = this.head;
//     let count = 0;

//     while (count < index) {
//       previous = current;
//       count++;
//       current = current.next;
//     }
//     node.next = current;
//     previous.next = node;

//     this.size++;
//   }

//   // Get At
//   getAt(index) {
//     let current = this.head;
//     let count = 0;

//     while (current) {
//       if (count == index) {
//         console.log(current.data);
//       }
//       count++;
//       current = current.next;
//     }
//     return null;
//   }

//   // Remove at
//   removeAt(index) {
//     if (index > 0 && index > this.size) {
//       return;
//     }
//     let current = this.head;
//     let previous;
//     let count = 0;
//     if (index === 0) {
//       this.head = current.next;
//     } else {
//       while (count < index) {
//         count++;
//         previous = current;
//         current = current.next;
//       }

//       previous.next = current.next;
//     }
//     this.size--;
//   }

//   // Clear list
//   clearList() {
//     this.head = null;
//     this.size = 0;
//   }

//   // Print List Data
//   printListData() {
//     let current = this.head;
//     while (current) {
//       console.log(current.data);
//       current = current.next;
//     }
//   }
// }

// const n = new LinkedList();

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // insert at first
  InsertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  // insert at last
  InsertLast(data) {
    const node = new Node(data);
    if (!this.head) {
      this.InsertFirst(data);
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }
      current.next = node;
      this.size++;
    }
  }

  // insert at index
  InsertAtIndex(data, index) {
    const node = new Node(data);
    if ((index > 0 && index > this.size) || index < 0) {
      return;
    }
    if (index === 0) {
      this.InsertFirst(data);
      return;
    }
    let current = this.head;
    let previous;
    let count = 0;

    while (count < index) {
      previous = current;
      count++;
      current = current.next;
    }

    node.next = current;
    previous.next = node;
    this.size++;
  }

  // get by index
  GetByIndex(index) {
    let current = this.head;
    let count = 0;
    if (index > this.size || index < 0) {
      return;
    }
    while (count <= index) {
      if (count === index) {
        return console.log(current.data);
      }
      count++;
      console.log(count);
      current = current.next;
    }
  }

  // remove by index
  RemoveByIndex(index) {
    if (index > this.size || index < 0) {
      return console.log("Please enter a valid index number!");
    }
    let current = this.head;
    let previous;
    let count = 0;
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        previous = current;
        current = current.next;
        count++;
      }
      previous.next = current.next;
    }
    this.size--;
  }

  // clear the list
  ClearList() {
    this.head = null;
    this.size = 0;
  }

  // print list data
  PrintAllData() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const node = new LinkedList();

node.InsertFirst(400);
node.InsertLast(500);
node.InsertAtIndex(600, 2);
node.GetByIndex(2);
node.RemoveByIndex(1);
node.ClearList();
node.PrintAllData();
