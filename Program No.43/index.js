// Question No.43 " Given an array of objects with a 'price' property, use the `sort` method to arrange them in descending order based on their prices."

let arrayOfObjects = [
    { name: 'Product A', price: 25 },
    { name: 'Product B', price: 10 },
    { name: 'Product C', price: 35 },
    { name: 'Product D', price: 15 }
  ];
  
  arrayOfObjects.sort((a, b) => b.price - a.price);
  
  console.log('Sorted Array:', arrayOfObjects);
  
