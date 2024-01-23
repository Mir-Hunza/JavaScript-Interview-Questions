// Question No.7 "Remove all duplicates from an array without built-in methods.

function removeDuplicates(inputArray) {
  let uniqueArray = [];

  for (let i = 0; i < inputArray.length; i++) {
    if (uniqueArray.indexOf(inputArray[i]) === -1) {
      uniqueArray.push(inputArray[i]);
    }
  }

  return uniqueArray;
}

let arrayWithDuplicates = [1, 2, 3, 4, 2, 5, 1, 6];
let arrayWithoutDuplicates = removeDuplicates(arrayWithDuplicates);
console.log(arrayWithoutDuplicates); 