/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let str1 = str.replace(/[^\w\s]/g, "").toLowerCase();

  let i = 0;
  let j = str1.length - 1;

  while (i <= j) {
    if (!/^[a-zA-Z]$/.test(str1.charAt(i))) {
      // regex to check if the character is alphabet
      i++;
    }
    if (!/^[a-zA-Z]$/.test(str1.charAt(j))) {
      j--;
    }
    if (str1.charAt(i) !== str1.charAt(j)) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}

module.exports = isPalindrome;