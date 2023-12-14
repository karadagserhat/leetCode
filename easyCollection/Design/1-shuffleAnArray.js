class Solution {
  constructor(numbers) {
    this.numbers = numbers;
  }

  reset() {
    return this.numbers;
  }

  shuffle() {
    let ans = [...this.numbers];

    for (let i = ans.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [ans[i], ans[j]] = [ans[j], ans[i]];
    }

    return ans;
  }
}

const sol = new Solution([1, 2, 3]);
sol.reset();
sol.shuffle();
sol;
sol.shuffle();
sol;
console.log(sol.shuffle());
console.log(sol.shuffle());
console.log(sol.shuffle());
console.log(sol.shuffle());
console.log(sol.shuffle());
console.log(sol.shuffle());
console.log(sol.reset());
console.log(sol);
console.log(sol.shuffle());
console.log(sol);
console.log(sol.shuffle());
console.log(sol);
