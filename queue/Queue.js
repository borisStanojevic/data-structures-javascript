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
    else {
      this.rear.next = node;
      this.rear = node;
    }

    this.length++;
  }

  dequeue() {
    if(!this.isEmpty) throw new Error("The queue is empty.");

    if(this.front === this.rear) this.front = null;

    this.front = this.front.next;
    
    this.length--;
  }

  peek() {
    return this.front;
  }

  isEmpty() {
    return this.length === 0;
  }

}