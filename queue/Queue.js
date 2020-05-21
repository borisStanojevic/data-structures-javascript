class Node {
  
  constructor(data) {
    this.data = data;
    this.next = null;
  }

}

class Queue {

  constructor() {
    this.front = null;
    this.rear = null;
    this.length = 0;
  }

  enqueue(data) {
    const node = new Node(data);
    if(this.isEmpty()) {
      this.front = node;
      this.rear = node;
    }
    else{
      this.rear.next = node;
      this.rear = node;
    }

    this.length++;

    return this;
  }

  dequeue() {

  }

  peek() {
    return this.front;
  }

  isEmpty() {
    return this.length === 0;
  }

}

const queue = new Queue();

console.log(queue.enqueue("Mile"));
console.log(queue.enqueue("Brena"));
console.log(queue.enqueue("Saban"));