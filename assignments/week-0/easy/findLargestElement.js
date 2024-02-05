/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  let max = numbers[0];
  const len = numbers.length;
  for (let i = 0; i < len; i++) {
    let cur_max = numbers[i];
    if (cur_max > max) {
      max = cur_max;
    }
  }
  return max;
}

module.exports = findLargestElement;