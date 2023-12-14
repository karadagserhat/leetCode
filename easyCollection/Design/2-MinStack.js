class MinStack {
  constructor() {
    this.stack = [];
  }

  push(val) {
    return this.stack.push({
      val,
      min: this.stack.length === 0 ? val : Math.min(val, this.getMin()),
    });
  }

  pop() {
    return this.stack.pop();
  }

  top() {
    return this.stack.at(-1).val;
  }

  getMin() {
    return this.stack.at(-1).min;
  }
}

const q = new MinStack();

q.push(2);
q.push(4);
console.log(q.top());
console.log(q.getMin());
console.log(q);
