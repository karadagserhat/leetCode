function powerOfThree(n) {
  let exponent = (Math.log(n) / Math.log(3)).toFixed(10);

  return exponent % 1 === 0;
}

function isPowerOfThree2(n) {
  while (n > 1) {
    if (n % 3 === 0) n /= 3;
    else break;
    console.log(n);
  }
  return n === 1;
}

console.log(powerOfThree(27));
console.log(isPowerOfThree2(27));
