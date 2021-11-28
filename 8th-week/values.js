const hobbies = ['Sports', 'Cooking']; // Pointer to the Array is stored
const age = 22; // the Value itself is stored

hobbies.push('Reading'); // the Address of the Array doesn't change

// hobbies = ['Coding', 'Sleeping'] Not Allowed because you would change the new Address

console.log(hobbies)

// Primitive Values : Strings, Numbers, Booleans & More.
// References Values : Objects, Arrays etc.

const person = { age: 22 };
const getAdultYears = (peep) => {
  peep.age -= 18;
  return peep.age;
  // return peep.age - 18;
}

console.log(getAdultYears({ ...person })); // Get the Value Copies
console.log(person);
console.log(getAdultYears(person)); // Change the values of person address
console.log(person);