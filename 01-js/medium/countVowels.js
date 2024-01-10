/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function hasVowels(s) {
  // Define a regular expression that matches any vowel (case-insensitive)
  var vowelRegex = /[aeiou]/i;

  // Use the test method to check if the string contains any vowels
  return vowelRegex.test(s);
}

function countVowels(str) {
    // Your code here
  let c=0;
  for(let i=0;i<str.length;i++){
    if(hasVowels(str[i])==true){
      c+=1;
    }
  }
  return c;
}

module.exports = countVowels;