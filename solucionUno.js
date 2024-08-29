// Desarrollo punto 1 - Krsna Gutierrez 

class ListNode {
  constructor(data) {
    this.data = data;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0; 
  }

  append(data) {
    const newNode = new ListNode(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.nextNode) {
        current = current.nextNode;
      }
      current.nextNode = newNode;
    }
    this.length++;
  }

  peek() {
    return this.head ? this.head.data : null;
  }

  size() {
    return this.length;
  }

  display() {
    let current = this.head;
    let output = "";  

    while (current) {
      output += current.data + " -> ";
      current = current.nextNode;
    }

    output += "None";
    console.log(output);  
  }

  sort() {
    if (this.head === null || this.head.nextNode === null) {
      return;
    }

    let current = this.head;
    const elements = [];

    while (current) {
      elements.push(current.data);
      current = current.nextNode;
    }

    elements.sort((a, b) => a - b);

    this.head = null;
    this.length = 0;
    for (let data of elements) {
      this.append(data);
    }
  }
}

function combineLists(listx, listy) {
  const combinedList = new LinkedList();

  let current = listx.head;
  while (current) {
    combinedList.append(current.data);
    current = current.nextNode;
  }

  current = listy.head;
  while (current) {
    combinedList.append(current.data);
    current = current.nextNode;
  }

  combinedList.sort();

  return combinedList;
}
  
  
  // Pruebas:

  const listx = new LinkedList();
  listx.append(10);
  listx.append(5);
  listx.append(15);
  
  const listy = new LinkedList();
  listy.append(20);
  listy.append(3);
  listy.append(7);
  
  console.log("List 1 before sorting:");
  listx.display();  
  
  console.log("List 2 before sorting:");
  listy.display();  
  
  listx.sort();
  listy.sort();
  
  console.log("List 1 after sorting:");
  listx.display(); 
  
  console.log("List 2 after sorting:");
  listy.display();  
  
  const combinedList = combineLists(listx, listy);
  console.log("Combined and sorted list:");
  combinedList.display();  
  
  console.log("Peek into combined list:", combinedList.peek()); 
  console.log("Size of combined list:", combinedList.size());   
