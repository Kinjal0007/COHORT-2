/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1=str1.toLowerCase();
  str2=str2.toLowerCase();
  let a=str1.split('').sort().join('');
  let b=str2.split('').sort().join('');

  if(a.length!=b.length){
    return false;
  }

  for (let i = 0; i < str1.length; i++) {
    if(a[i]!=b[i]){
      return false;
    }
  }
  return true;
}

module.exports = isAnagram;
