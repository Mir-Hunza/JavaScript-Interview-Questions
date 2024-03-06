// Question No.45 "Given an array of objects with 'id' properties, use the `find` method to locate an object with a specific 'id' and update its 'status' property to 'completed'."

let arrayOfObjects = [
  { id: 1, status: 'pending' },
  { id: 2, status: 'in progress' },
  { id: 3, status: 'pending' },
  { id: 4, status: 'completed' },
];

let targetId = 2;

let targetObject = arrayOfObjects.find(obj => obj.id === targetId);

if (targetObject) {
  targetObject.status = 'completed';
}

console.log('Updated Array of Objects:', arrayOfObjects);