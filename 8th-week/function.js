// Default Parameter
const greetUser = (userName = 'Guest') => {
  console.log(`Hello, ${userName}`)
}

greetUser()

// Spread Operator
const sumUp = (...numbers) => {
  let total = 0;
  for (const number of numbers) {
    total += number
  }
  console.log(total);
}

sumUp(5, 2, 3, 4, 6, 7);
console.log(sumUp);