// Question No.21 "How can you clone an object in JavaScript and also give one example each deep copy, shallow copy, and reference copy."

const originalObject = { a: 1, b: 2 };

const referenceCopy = originalObject;

referenceCopy.b = 3;

console.log(originalObject);  
console.log(referenceCopy);   
