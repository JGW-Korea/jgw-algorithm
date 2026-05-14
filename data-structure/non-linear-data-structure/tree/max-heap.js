class MaxHeap {
  constructor() {
    this.heap = [null];
    this.size = 0;
  }

  insert(value) {
    this.heap.push(value);

    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    while(parentIndex !== 0 && this.heap[parentIndex] < this.heap[currentIndex]) {
      [this.heap[parentIndex], this.heap[currentIndex]]
        = [this.heap[currentIndex], this.heap[parentIndex]];

      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }

    this.size += 1;
  }

  remove() {
    if(this.heap.length === 1) return;
    if(this.heap.length === 2) {
      this.size -= 1;
      return this.heap.pop();
    }

    const returnValue = this.heap[1];
    this.heap[1] = this.heap.pop();

    let currentIndex = 1;

    while(true) {
      let leftIndex = currentIndex * 2;
      let rightIndex = (currentIndex * 2) + 1;
      let finalIndex = currentIndex;

      if(leftIndex < this.heap.length && this.heap[leftIndex] > this.heap[finalIndex]) {
        finalIndex = leftIndex;
      }

      if(rightIndex < this.heap.length && this.heap[rightIndex] > this.heap[finalIndex]) {
        finalIndex = rightIndex;
      }

      if(finalIndex === currentIndex) {
        break;
      }

      [this.heap[currentIndex], this.heap[finalIndex]] = [this.heap[finalIndex], this.heap[currentIndex]];
      currentIndex = finalIndex;
    }

    this.size -= 1;

    return returnValue;
  }
}
