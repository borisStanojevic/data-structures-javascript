class Vector {

  constructor() {
    this.elements = {};
    this.elementsCount = 0;
  }

  get(index) {
    return this.elements[index];
  }

  push(element) {
    this.elements[this.elementsCount++] = element;
  }

  pop() {
    const poppedElement = this.elements[this.elementsCount - 1];
    delete this.elements[this.elementsCount - 1];
    this.elementsCount--;

    return poppedElement;
  }

  shift() {
    const removedElement = this.elements[0];

    this._shiftElementsLeft(0);
    this.elementsCount--;

    return removedElement;
  }

  unshift(element) {
    this._shiftElementsRight(0);
    this.elements[0] = element;
    
    return ++this.elementsCount;
  }

  splice(index) {
    const removedElement = this.elements[index];

    this._shiftElementsLeft(index);
    this.elementsCount--;

    return removedElement;
  }

  _shiftElementsLeft(startIndex) {
    for (let i = startIndex; i < this.elementsCount - 1; i++) {
      this.elements[i] = this.elements[i + 1];
    }
    delete this.elements[this.elementsCount - 1];
  }

  _shiftElementsRight(startIndex) {
    for(let i = this.elementsCount - 1; i >= startIndex; i--) {
      this.elements[i+1] = this.elements[i];
    }
    delete this.elements[0];
  }

}