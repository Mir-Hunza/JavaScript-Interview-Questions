//  Question No.1 "Reverse a string without using the built-in reverse() method."

function reverseString(inputString) {
    let reversedString = '';
    
    for (let i = inputString.length - 1; i >= 0; i--) {
      reversedString += inputString[i];
    }
    
    return reversedString;
  }
  
let originalString = "Hello, World!";
let reversedResult = reverseString(originalString);
console.log(reversedResult);


