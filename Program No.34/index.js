// Question No.34 "Given an array of objects with 'id' properties, use the `find` method to locate an object with a specific 'id' and update its 'status' property to 'completed'."

const arrayOfObjects = [
  { id: 1, status: 'pending' },
  { id: 2, status: 'in progress' },
  { id: 3, status: 'pending' },
  { id: 4, status: 'in progress' },
];

const targetId = 3; 

const foundObject = arrayOfObjects.find(obj => obj.id === targetId);

if (foundObject) {
  
  foundObject.status = 'completed';

  console.log('Object updated:', foundObject);
} else {
  console.log('Object not found with id:', targetId);
}



