/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let reversedstr=str
  .toLowerCase()
  .replace(/[^\w]/g, "")
  .split("")
  .reverse()
  .join("")
  return reversedstr==str.toLowerCase().replace(/[^\w]/g, "");
}

module.exports = isPalindrome;
