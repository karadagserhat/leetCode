var isPalindrome = function (s) {
  return cleanStr(s);
  return cleanStr(s) === cleanStr(s).split('').reverse().join('');
};

function cleanStr(str) {
  return str.replace(/\W/g, '').toLowerCase();
}

console.log(isPalindrome('ab_a'));
