class Node {

  constructor(data) {
    this.data = data;
    this.next = null;
  }
  
}

class LinkedList {

  constructor(data) {
    this.head = new Node(data);
    this.tail = this.head;
    this.length = 1;
  }

  append(data) {
    const newNode = new Node(data);

    this.tail.next = newNode;
    this.tail = newNode;

    this.length++;
  }

  prepend(data) {
    const newNode = new Node(data);

    newNode.next = this.head;
    this.head = newNode;

    this.length++;
  }

  insert(data, index) {
    if(index === 0) this.prepend(data);
    else if(index === this.length - 1) this.append(data);
    else {
      const newNode = new Node(data);
      const current = this._getNodeAtIndex(index - 1);
      
      const next = current.next;
      current.next = newNode;
      newNode.next = next;
    }

    this.length++;
  }

  remove(index) {
    const current = this._getNodeAtIndex(index - 1);

    const nodeToRemove = current.next;
    current.next = nodeToRemove.next;

    this.length--;
  }

  _getNodeAtIndex(index) {
    if(index >= this.length || index < 0) throw new Error("Index out of bounds.");

    let currentIndex = 0;
    let current = this.head;
    while(currentIndex !== index) {
      current = current.next;
      currentIndex++;
    }

    return current;
  }
}

function printLinkedList(linkedList) {
  let current = linkedList.head;
  while(current != null){
    console.log(current.data);
    current = current.next;
  }
}

const linkedList = new LinkedList(10);

linkedList.append(5);
linkedList.append(1);

linkedList.insert(69, 0);

printLinkedList(linkedList);

console.log("\n\n");

linkedList.remove(1);

printLinkedList(linkedList);