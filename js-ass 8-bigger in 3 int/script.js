function findLargest() {
  // Get the values from the input fields and parse to numbers
  const num1 = parseInt(document.getElementById("num1").value);
  const num2 = parseInt(document.getElementById("num2").value);
  const num3 = parseInt(document.getElementById("num3").value);

  // Check for NaN (Not a Number)
  if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    alert("Please enter valid numbers!");
    return;
  }

  
  // Using Math.max()
  // let largest = Math.max(num1, num2, num3);

  // Using conditional statements 
  let largest = num1;
  if (num2 > largest) {
    largest = num2;
  }
  if (num3 > largest) {
    largest = num3;
  }

  // Update the text content of the result paragraph
  document.getElementById("result").textContent = `Largest Number: ${largest}`;
}
