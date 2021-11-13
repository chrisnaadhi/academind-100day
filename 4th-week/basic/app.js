let age = 32;
let userName = 'Chrisna';
let hobbies = ['Sports', 'Cooking', 'Reading'];
let job = {
  title: 'Developer',
  place: 'Bandung',
  salary: 10000,
};

let adultYears;

function calculateAdultYears(userAge = 32) {
  let result = userAge - 18;
  return result;
}

console.log(calculateAdultYears());
console.log(calculateAdultYears(55));