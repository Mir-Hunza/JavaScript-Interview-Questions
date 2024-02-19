// Question No.32 "Discuss the default behavior of the `sort` method for strings and numbers. How would you use a custom comparison function to sort an array of objects by a specific property?"

const arrayOfObjects = [
    { name: 'John', age: 30 },
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 35 }
  ];
  
arrayOfObjects.sort((a, b) => a.age - b.age);
  
console.log(arrayOfObjects);
  



