// Question No.29 "Explain the differences between regular functions and arrow functions in terms of scope, this binding, and their use as methods."

const obj1 = {
  name: 'Regular Function',
  sayHello: function() {
    console.log(`Hello from ${this.name}`);
  }
};
obj1.sayHello();

const obj2 = {
  name: 'Arrow Function',
  sayHello: () => {
    console.log(`Hello from ${this.name}`);
  }
};
obj2.sayHello();

