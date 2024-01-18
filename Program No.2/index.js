//  Question No.2 "Count the number of vowels in a given string."

function countVowels(inputString) {
    
    inputString = inputString.toLowerCase();
  
    const vowels = ['a', 'e', 'i', 'o', 'u'];
  
    let vowelCount = 0;
    
    for (let i = 0; i < inputString.length; i++) {
  
      if (vowels.includes(inputString[i])) {
        vowelCount++;
      }
    }
  
    return vowelCount;
  }
  
  let testString = "Hello, World!";
  let result = countVowels(testString);
  console.log(result);
  