function countPrimes(n) {
  let count = 0;
  for (let i = 2; i < n; i++) {
    if (isPrime(i)) count++;
  }
  return count;
}

function isPrime(n) {
  if (n < 2) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return true;
}

/************************** */
/**************************** */

var countPrimes2 = function (n) {
  // let seen = new Uint8Array(n);
  let seen = buildMap(n);

  count = 0;

  for (let num = 2; num < n; num++) {
    if (seen[num]) continue;
    count++;
    for (let mult = num * num; mult < n; mult += num) seen[mult] = 1;
  }
  return count;
};

function buildMap(n) {
  const charMap = {};
  for (let i = 2; i < n; i++) {
    charMap[i] = charMap[i] + 1 || 0;
  }

  return charMap;
}

console.log(countPrimes2(10));
