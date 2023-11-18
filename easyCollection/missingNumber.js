function missing(nums) {
  return (nums.length * (nums.length + 1)) / 2 - nums.reduce((a, b) => a + b);
}

console.log(missing([9, 6, 4, 2, 3, 5, 7, 0, 1]));
