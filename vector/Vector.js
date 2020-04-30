class Vector {
  constructor() {
    this.elements = {};
    this.elementsCount = 0;
  }

  // O(1)
  get(index) {
    return this.elements[index];
  }

  // O(1)
  push(element) {
    this.elements[this.elementsCount++] = element;
  }

  // O(1)
  pop() {
    const poppedElement = this.elements[this.elementsCount - 1];
    delete this.elements[this.elementsCount - 1];
    this.elementsCount--;

    return poppedElement;
  }

  // O(n)
  shift() {
    const removedElement = this.elements[0];
    delete this.elements[0];

    this.shiftElements(0);
    this.elementsCount--;

    return removedElement;
  }

  // O(n)
  unshift() {
    // Add to the front.
  }

  // O(n)
  splice(index) {
    const removedElement = this.elements[index];

    this.shiftElements(index);
    this.elementsCount--;

    return removedElement;
  }

  shiftElements(startIndex) {
    for (let i = startIndex; i < this.elementsCount - 1; i++) {
      this.elements[i] = this.elements[i + 1];
    }
    delete this.elements[this.elementsCount - 1];
  }

}

const vector = new Vector();

vector.push(3);
vector.push(6);
vector.push(9);
console.log(vector);

// vector.shift();
// console.log(vector);

// vector.shift();
// console.log(vector);

vector.pop();
console.log(vector);

vector.delete(1);
console.log(vector);