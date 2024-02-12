// Question No.25 "Explain the use of the break and continue statements within loops. Provide scenarios where each might be used."

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let target = 6;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === target) {
    console.log(`Target ${target} found at index ${i}`);
    break;
  }
}



