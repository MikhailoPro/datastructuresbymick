class Stack {
    constructor() {
      this.items = [];
    }
  
    // Push an element onto the stack
    push(element) {
      this.items.push(element);
    }
  
    // Pop an element from the stack
    pop() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items.pop();
    }
  
    // Peek at the top element of the stack
    peek() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items[this.items.length - 1];
    }
  
    // Check if the stack is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Return the size of the stack
    size() {
      return this.items.length;
    }
  
    // Clear the stack
    clear() {
      this.items = [];
    }
  }
  
  class Queue {
    constructor() {
      this.items = [];
    }
  
    // Add an element to the queue
    enqueue(element) {
      this.items.push(element);
    }
  
    // Remove an element from the queue
    dequeue() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items.shift();
    }
  
    // Peek at the front element of the queue
    front() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items[0];
    }
  
    // Check if the queue is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Return the size of the queue
    size() {
      return this.items.length;
    }
  
    // Clear the queue
    clear() {
      this.items = [];
    }
  }
  
  module.exports = { Stack, Queue };
  