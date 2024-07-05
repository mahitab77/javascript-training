const calculateButton = document.getElementById('calculateButton');
const sumDisplay = document.getElementById('sumDisplay');

calculateButton.addEventListener('click', () => {
  
  
   let sum = 0;
   for (let i = 1; i <= 10; i++) {
     sum += i;
   }

  sumDisplay.textContent = `The sum of numbers from 1 to 10 is: ${sum}`;
});
