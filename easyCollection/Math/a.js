/************ */
// 1- fizzBuzz

/********** */
// 2- countPrimes

/******** */
// 3- powerOfThree

/********** */
// 4- romanToInteger

function romanToInteger(str) {
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

  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]] < obj[str[i + 1]]) total -= obj[str[i]];
    else total += obj[str[i]];
  }

  return total;
}

console.log(romanToInteger('IV'));
