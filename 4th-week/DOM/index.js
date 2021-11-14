console.log('Hello World!');

const inputBox = document.querySelector('#inputBox');
const currentCharacter = document.querySelector('#current');

console.log(inputBox);
console.log(currentCharacter);

// Add an Element
// Create a New Element
let newA = document.createElement('a');
newA.href = 'https://www.google.com';
newA.textContent = 'Google';

// Get access to the parent element
let paragraf = document.querySelector('.paragraf');

// Insert new Element
paragraf.appendChild(newA);