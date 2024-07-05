function checkMultiple() {
    // Get the value from the input field and parse to a number
    const number = parseFloat(document.getElementById("number").value);
  
    // Check for invalid input (NaN or negative number)
    if (isNaN(number) || number <= 0) {
      alert("Please enter a valid positive number!");
      return;
    }
  
    // Check divisibility by 5 and 8 using modulo operator (%)
    const isDivisibleBy5 = number % 5 === 0;
    const isDivisibleBy8 = number % 8 === 0;
  
    // Create the message based on the divisibility checks
    let message;
    if (isDivisibleBy5 && isDivisibleBy8) {
      message = "The number is divisible by BOTH 5 and 8.";
    } else if (isDivisibleBy5) {
      message = "The number is divisible by 5.";
    } else if (isDivisibleBy8) {
      message = "The number is divisible by 8.";
    } else {
      message = "The number is not divisible by 5 or 8.";
    }
  
    // Update the text content of the result paragraph
    document.getElementById("result").textContent = message;
  }
  