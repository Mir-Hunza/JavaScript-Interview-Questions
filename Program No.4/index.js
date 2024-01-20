// Question No.4 "Check if a string is a palindrome."

function isPalindrome(inputString) {
  
  let cleanString = inputString.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

  let reversedString = cleanString.split('').reverse().join('');

  return cleanString === reversedString;
}

let testString = "A man, a car, a horse, Mount Everest!";
let result = isPalindrome(testString);
console.log(result); 
