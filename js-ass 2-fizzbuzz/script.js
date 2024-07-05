const numberInput = document.getElementById('numberInput');
const checkButton = document.getElementById('checkButton');
const result = document.getElementById('result');

checkButton.addEventListener('click', function() {
  const number = parseInt(numberInput.value);
  let message;

  if (number % 3 === 0 && number % 5 === 0) {
    message = "FizzBuzz";
  } else if (number % 3 === 0) {
    message = "Fizz";
  } else if (number % 5 === 0) {
    message = "Buzz";
  } else {
    message = number;
  }

  result.textContent = message;
});
