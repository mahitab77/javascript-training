function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
  
    // Input validation (optional)
    if (isNaN(num1) || isNaN(num2)) {
      alert("Please enter valid numbers.");
      return;
    }
  
    const sum = num1 + num2;
    const difference = num1 - num2;
    const product = num1 * num2;
    const division = num2 !== 0 ? num1 / num2 : "Division by zero is not allowed."; // Handle division by zero
  
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
      Sum: <b>${sum}</b><br>
      Difference: <b>${difference}</b><br>
      Product: <b>${product}</b><br>
      Division: <b>${division}</b>
    `;
  }
  