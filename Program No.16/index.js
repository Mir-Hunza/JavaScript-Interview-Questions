// Question No.15 "How does the optional chaining operator (?.) work, and how can it be used to access nested properties of an object?"

const person = {
  name: 'John',
  address: {
    city: 'New York',
    zipcode: '10001',
  },
  hobbies: ['reading', 'coding'],
};

const cityName = person.address?.city;
const postalCode = person.address?.zipcode;
const country = person.address?.country; 

console.log('City Name:', cityName);     
console.log('Postal Code:', postalCode); 
console.log('Country:', country);           
