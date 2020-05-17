class Node {
  
  constructor(data) {
    this.data = data;
    this.next = null;
  }

}

class Stack {

  constructor() {
    this.top = null;
    this.bottom = this.top;
    this.length = 0;
  }

  push(data) {
    const element = new Node(data);

    if(this.isEmpty()){
      this.top = element;
      this.bottom = element;
    }
    else {
      const current = this.top;
      this.top = element;
      this.top.next = current;
    }

    this.length++;
  }

  pop() {
    if(this.isEmpty()) throw new Error("The stack is empty. Nothing to pop.");

    if(this.top === this.bottom) this.bottom = null;

    const current = this.top;
    this.top = this.top.next;
    
    this.length--;

    return current;
  }

  peek() {
    return this.top;
  }

  isEmpty() {
    return this.length === 0;
  }

}