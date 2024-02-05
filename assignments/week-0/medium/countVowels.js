/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    const cur_char = str.charAt(i);
    if (
      cur_char === "a" ||
      cur_char === "e" ||
      cur_char === "i" ||
      cur_char === "o" ||
      cur_char === "u" ||
      cur_char === "A" ||
      cur_char === "E" ||
      cur_char === "I" ||
      cur_char === "O" ||
      cur_char === "U"
    ) {
      count++;
    }
  }
  return count;
}

module.exports = countVowels;