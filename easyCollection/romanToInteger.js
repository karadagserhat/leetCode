function roman(s) {
  const obj = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };

  let total = 0;

  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]] < obj[s[i + 1]]) total -= obj[s[i]];
    else total += obj[s[i]];
  }

  return total;
}

/******************* */
/******************* */

function roman2(s) {
  const obj = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };
  const sVal = s.split('').map((s) => obj[s]);

  console.log(sVal);

  return sVal.reduce(
    (acc, val, i, arr) => (val < arr[i + 1] ? acc - val : acc + val),
    0
  );
}

console.log(roman('IV'));
console.log(roman2('IV'));
