
    function checkSigns() {
    // Get the values from the input fields and parse them to integers
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
  
    // Check if either value is not a number (NaN)
    if (isNaN(num1) || isNaN(num2)) {
      alert("Please enter valid numbers!");
      return;
    }
  
    // Define a variable to store the check condition
    const condition = (num1 > 0 && num2 < 0) || (num1 < 0 && num2 > 0);
  
    // Set the message based on the condition
    const message = condition ? "Yes" : "No";
  
    // Update the text content of the result paragraph
    document.getElementById("result").textContent = `Result: ${message}`;
  }
  