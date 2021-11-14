const input = document.querySelector('#product');
const remainingChars = document.querySelector('#remaining-chars');
const btn = document.querySelector('button');
let maxAllowedChars = input.maxLength;

input.addEventListener('input', () => {
  let totalChars = input.value.length;
  let remaining = maxAllowedChars - totalChars;
  remainingChars.textContent = remaining;

  if (remaining <= 10) {
    input.classList.add('warning');
    remainingChars.classList.add('warning');
  } else {
    input.classList.remove('warning');
    remainingChars.classList.remove('warning');
  }
})

btn.addEventListener('click', () => {
  alert(input.value);
})

const fruits = ['Apple', 'Mango', 'Banana']
console.log(fruits);
fruits.push('Cherry')
console.log(fruits);
let angka = [];

for (let i = 1; i <= 15; i++) {
  angka.push(i);
}

console.log(angka);