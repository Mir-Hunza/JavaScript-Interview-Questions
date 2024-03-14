// Question No.50 "Modify the `find` method to handle the scenario where the desired element is not found, returning a custom default object instead in JavaScript."

function findWithDefault(array, predicate, defaultValue) {

    let result = array.find(predicate);
  
    return result !== undefined ? result : defaultValue;
  }
  
  let arrayOfObjects = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
  ];
  
  let resultObject = findWithDefault(
    arrayOfObjects,
    obj => obj.id === 2,
    { id: -1, name: 'Default' }
  );
  
  console.log('Original Array of Objects:', arrayOfObjects);
  console.log('Result Object:', resultObject);
  

