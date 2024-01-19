// Question No.3 "Convert the first letter of each word in a sentence to uppercase."

function capitalizeFirstLetterOfEachWord(sentence) {
  
  let words = sentence.split(' ');

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  let capitalizedSentence = words.join(' ');

  return capitalizedSentence;
}

let inputSentence = "hello world";
let result = capitalizeFirstLetterOfEachWord(inputSentence);
console.log(result); 
