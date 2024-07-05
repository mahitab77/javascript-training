const numberInput = document.getElementById('numberInput');
const checkButton = document.getElementById('checkButton');
const resultDisplay = document.getElementById('resultDisplay');

checkButton.addEventListener('click', () => {
  const number = parseFloat(numberInput.value); 

  if (isNaN(number)) {
    resultDisplay.textContent = "Invalid input. Please enter a number.";
  } else {
    if (number > 0) {
      resultDisplay.textContent = "The number is positive.";
    } else if (number < 0) {
      resultDisplay.textContent = "The number is negative.";
    } else {
      resultDisplay.textContent = "The number is zero.";
    }
  }
});
