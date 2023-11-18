function bits(n) {
  const str = n.toString(2);
  console.log(str);
  console.log(str.split('0').join('').length);
  let count = 0;

  for (let char of str) {
    if (char === '1') count++;
  }

  return count;
}

console.log(bits(111));
