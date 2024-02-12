const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  // Skip even numbers
  if (numbers[i] % 2 === 0) {
    continue;
  }
  console.log(numbers[i]);
}
