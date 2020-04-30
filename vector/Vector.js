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
    const poppedElement = elements[elementsCount - 1];
    delete elements[elementsCount - 1];
    elementsCount--;

    return poppedElement;
  }

  // O(n)
  delete(index) {
    const element = this.elements[index];
    this.shiftElements(index);

    delete this.elements[elementsCount - 1];
    elementsCount--;
  }

  shiftElements(startIndex) {
    for (let i = startIndex; i < this.elementsCount - 1; i++) {
      this.elements[i] = this.elements[i + 1];
    }
  }
}

const vector = new Vector();

vector.push(3);
vector.push(6);
vector.push(9);

console.log(vector);
