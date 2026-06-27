class CircularQueue {
	constructor(size = 10) {
		this.queue = new Array(size).fill(null);
		this.front = 0;
		this.rear = 0;
		this.length = 0;
	}
	
	enqueue(value) {
		if(this.isFull()) {
			throw new Error("Queue is full. Cannot enqueue value.");
		}
		
		this.queue[this.rear] = value;
		this.rear = (this.rear + 1) % this.queue.length;
		return true;
	}
	
	dequeue() {
		if(this.isEmpty()) {
			throw new Error("Queue is empty. Cannot dequeue value.");
		}
		
		const returnValue = this.queue[this.front];
		this.front = (this.front + 1) % this.queue.length;
		return returnValue;
	}
	
	peek() {
		if(this.isEmpty()) {
			throw new Error("Queue is empty. Cannot dequeue value.");
		}
		
		return this.queue[this.front];
	}
	
	clear() {
		this.front = this.rear;
	}
	
	length() {
		return (this.rear - this.front + this.queue.length) % this.queue.length;
	}
	
	_isFull() {
		return this.front === (this.rear + 1) % this.queue.length;
	}
	
	_isEmpty() {
		return this.front === this.rear;
	}
}