function checkNumbers() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
  
    // Check for NaN (Not a Number)
    if (isNaN(num1) || isNaN(num2)) {
      alert("Please enter valid numbers!");
      return;
    }
  
    const condition = (num1 === 50 || num2 === 50 || (num1 + num2 === 50));
    const message = condition ? "True" : "False";
  
    document.getElementById("result").textContent = `Result: ${message}`;
  }
  