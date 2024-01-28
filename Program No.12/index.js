// Question No.12 "Loop through an array using a for-of loop and double each element."

let myArray = [1, 2, 3, 4, 5];
let doubledArray = [];

for (let element of myArray) {
  doubledArray.push(element * 2);
}

console.log(doubledArray);