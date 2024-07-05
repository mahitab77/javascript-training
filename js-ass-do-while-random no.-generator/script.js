const generateButton = document.getElementById('generateButton');
const randomNumberDisplay = document.getElementById('randomNumber');

generateButton.addEventListener('click', () => {
  let randomNumber;
  // do-while loop to ensure at least one random number is generated
  do {
    randomNumber = Math.floor(Math.random() * 100); // Generate between 0-99
  } while (randomNumber === 0); // Loop if it's zero 

  randomNumberDisplay.textContent = `Random Number: ${randomNumber}`;
});
