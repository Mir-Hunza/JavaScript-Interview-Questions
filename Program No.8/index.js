// Question No.8 "Sort the array in ascending and descending without built-in methods."

/*
function bubbleSortAscending(inputArray) {
  let len = inputArray.length;
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < len - 1; i++) {
      if (inputArray[i] > inputArray[i + 1]) {
        // Swap elements if they are in the wrong order
        let temp = inputArray[i];
        inputArray[i] = inputArray[i + 1];
        inputArray[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return inputArray;
}

// Example usage:
let arrayToSortAscending = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
let sortedArrayAscending = bubbleSortAscending(arrayToSortAscending.slice());
console.log(sortedArrayAscending);
*/

function bubbleSortDescending(inputArray) {
  let len = inputArray.length;
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < len - 1; i++) {
      if (inputArray[i] < inputArray[i + 1]) {
        // Swap elements if they are in the wrong order
        let temp = inputArray[i];
        inputArray[i] = inputArray[i + 1];
        inputArray[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return inputArray;
}

let arrayToSortDescending = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
let sortedArrayDescending = bubbleSortDescending(arrayToSortDescending.slice());
console.log(sortedArrayDescending);
