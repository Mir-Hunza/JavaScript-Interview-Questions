// Question No.24 "Provide an example of using optional chaining within a loop to access a potentially missing property of an object."

const users = [
  { name: 'John', address: { city: 'Canada' } },
  { name: 'Bob' },
  { name: 'Charlie', address: { city: 'Toronto' } }
];

for (const user of users) {

  const cityName = user?.address?.city || 'Unknown';

  console.log(`${user.name}'s city is ${cityName}`);
}


