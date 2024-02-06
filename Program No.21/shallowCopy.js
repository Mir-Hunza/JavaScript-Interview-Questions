// Question No.21 "How can you clone an object in JavaScript and also give one example each deep copy, shallow copy, and reference copy."

const originalObject = { a: 1, b: { c: 2 } };

const shallowCopy = Object.assign({}, originalObject);

shallowCopy.b.c = 3;

console.log(originalObject);  
console.log(shallowCopy);     
