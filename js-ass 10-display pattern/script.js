const generateButton = document.getElementById('generateButton');
const triangleDisplay = document.getElementById('triangleDisplay');

generateButton.addEventListener('click', () => {
  let triangle = "";
  // Define the number of rows (height of the triangle)
  const rows = 5;

  for (let i = 1; i <= rows; i++) {
    // Add asterisks for each row, increasing by 1 each time
    triangle += "*".repeat(i) + "\n";
  }

  triangleDisplay.textContent = triangle;
});
