// Question No.6 "Find the index of the first occurrence of a specific element in an array."

function findIndex(array, targetElement) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === targetElement) {
      return i;
    }
  }

  return -1;
}

let myArray = [1, 2, 3, 4, 5];
let targetElement = 3;
let index = findIndex(myArray, targetElement);

if (index !== -1) {
  console.log(`The first occurrence of ${targetElement} is at index ${index}.`);
} else {
  console.log(`${targetElement} is not present in the array.`);
}
