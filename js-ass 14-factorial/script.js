const numberInput = document.getElementById('numberInput');
const calculateButton = document.getElementById('calculateButton');
const resultDisplay = document.getElementById('resultDisplay');

calculateButton.addEventListener('click', () => {
  const number = parseInt(numberInput.value); // Convert input to integer

  if (isNaN(number) || number < 0) {
    resultDisplay.textContent = "Invalid input. Please enter a non-negative integer.";
  } else {
    let factorial = 1;
   
    for (let i = 1; i <= number; i++) {
      factorial *= i;
    }

    resultDisplay.textContent = `The Factorial of ${number} is: ${factorial}`;
  }
});
