// Question No.31 "Explain the purpose of the `filter` method. Provide an example where you use `filter` to extract elements from an array based on a specific condition."

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
});

console.log(evenNumbers); 



