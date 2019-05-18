// Object destructuring

// const person = {
//   // name: "Shock",
//   age: 37,
//   location: {
//     city: "Taichung",
//     temp: 32
//   }
// };

// // Using '=' to be default value and ':' for renaming.
// const { name: firstName = "Anonymous", age } = person;
// console.log(`${firstName} is ${age}.`);

// // Renaming the temp variable to temperature using ':'
// const { city, temp: temperature } = person.location;
// console.log(`It's ${temperature} in ${city}.`);

// Array destructuring

const address = [
  "1229 S Juniper Street",
  "Philadelphia",
  "Pennsylvania",
  "19147"
];

// const [street, city, state, zip] = address;
// console.log(`You are in ${city} ${state}`);

// skip the 1st and 2nd element and ignore the 4th
// const [, , state] = address;
// console.log(`You are in  ${state}`);

// Using default value
const address2 = [];
const [, , state = "New York"] = address2;
console.log(`You are in  ${state}`);
