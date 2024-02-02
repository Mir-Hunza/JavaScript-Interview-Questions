// Question No.17 "Compare the for...in loop and the for...of loop in terms of their use cases and the types of values they iterate over."

// for...in loop:

const obj = { a: 1, b: 2, c: 3 };

  for (let key in obj) {
  console.log(key, obj[key]);
}