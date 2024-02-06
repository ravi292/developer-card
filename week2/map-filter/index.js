const arr = [1, 2 , 3, 4, 5];

const mappedArray = arr.map(i => i*2); 

const filteredArray = arr.filter(i => i%2 === 0);

console.log("original array: ", arr);
console.log("mapped array: ", mappedArray);
console.log("filtered array: ", filteredArray);
