// Question No.17 "Explain the concept of "closures" in JavaScript and provide an example of their practical use"

function outerFunction(x) {

  function innerFunction(y) {
    return x + y; 
  }

  return innerFunction; 
}

const closureInstance = outerFunction(10);

const result = closureInstance(5);
console.log(result);
