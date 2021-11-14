// Sum Numbers
const calculateSumBtn = document.getElementById('sumBtn');

calculateSumBtn.addEventListener('click', () => {
  const numberInputSum = document.querySelector('#user-number');
  const enteredNumber = numberInputSum.value;

  let sumNumber = 0;
  
  for (let i = 0; i <= enteredNumber; i++) {
    sumNumber += i;
  }

  const calculatedSum = document.querySelector('#calculated-sum');
  calculatedSum.textContent = sumNumber;
  calculatedSum.style.display = 'block';
})


// Highlight Links
const highlightLinksButtonElement = document.querySelector('#highlight-links button');

highlightLinksButtonElement.addEventListener('click', () => {
  const anchorElements = document.querySelectorAll('#highlight-links a');

  for (const link of anchorElements) {
    link.classList.add('highlight')
  }
})

// Display User Data Information
const dummyUserData = {
  firstName: 'Chrisna',
  lastName: 'Adhi Pranoto',
  age: 22
};

const displayUserDataBtn = document.querySelector('#user-data button');

displayUserDataBtn.addEventListener('click', () => {
  const ulElement = document.querySelector('#user-data ul');

  ulElement.innerHTML = '';

  for (const userData in dummyUserData) {
    const newUserListItem = document.createElement('li');
    const outputText = `${userData.toUpperCase()}: ${dummyUserData[userData]}`
    newUserListItem.textContent = outputText;
    
    ulElement.append(newUserListItem);
  }
})

// Roll the Dice
const rollDiceBtn = document.querySelector('#statistics button');

const rollDice = () => {
  return Math.floor(Math.random() * 6) + 1;
}

rollDiceBtn.addEventListener('click', () => {
  const targetNumberInputElement = document.querySelector('#user-target-number');
  const diceRollsListElement = document.querySelector('#dice-rolls')

  const enteredNumber = +targetNumberInputElement.value;
  diceRollsListElement.innerHTML = '';

  let hasRolledTargetNumber = false;
  let numberOfRolls = 0;

  while (!hasRolledTargetNumber) {
    const rolledNumber = rollDice();
    // if (rolledNumber == enteredNumber) {
    //   hasRolledTargetNumber = true;
    // }
    numberOfRolls++;
    const newRollListElement = document.createElement('li');
    const outputText = `Roll ${numberOfRolls}: ${rolledNumber}`
    newRollListElement.textContent = outputText;
    diceRollsListElement.append(newRollListElement);
    hasRolledTargetNumber = rolledNumber == enteredNumber;
  }

  const outputTotalRollsElement = document.querySelector('#output-total-rolls');
  const outputTargetNumberElement = document.querySelector('#output-target-number');

  outputTargetNumberElement.textContent = enteredNumber;
  outputTotalRollsElement.textContent = numberOfRolls;
})