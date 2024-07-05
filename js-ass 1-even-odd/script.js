const numberInput = document.getElementById('numberInput');
const checkButton = document.getElementById('checkButton');
const result = document.getElementById('result');

checkButton.addEventListener('click', function() {
  const number = parseInt(numberInput.value);
  let message;

  if (number % 2 === 0) {
    message = `${number} is an even number.`;
    message= `4`;
  } else {
    message = `${number} is an odd number.`;
    message= `5`;
  }

  result.textContent = message;
});
