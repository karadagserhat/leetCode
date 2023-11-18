function isValidP(s) {
  // if (s.length % 2 !== 0) return false;

  const stack = [];

  for (char of s) {
    if (char === ')' && stack.at(-1) === '(') stack.pop();
    else if (char === '}' && stack.at(-1) === '{') stack.pop();
    else if (char === ']' && stack.at(-1) === '[') stack.pop();
    else stack.push(char);
  }

  return stack.length === 0;
}

/********************* */
/********************** */

var isValid2 = function (s) {
  const stack = [];

  for (const c of s) {
    if (c === '(') stack.push(')');
    else if (c === '{') stack.push('}');
    else if (c === '[') stack.push(']');
    else if (stack.pop() !== c) return false;
  }

  return stack.length === 0;
};

console.log(isValid2('()'));
