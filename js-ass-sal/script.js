function calculateNetSalary() {
    const grossSalary = document.getElementById("grossSalary").value;
    const taxRate = 0.1; // 10% tax
  
    // Input validation (optional)
    if (isNaN(grossSalary) || grossSalary <= 0) {
      alert("Please enter a valid positive number for gross salary.");
      return;
    }
  
    const taxAmount = grossSalary * taxRate;
    const netSalary = grossSalary - taxAmount;
  
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `Net Salary: <b>$${netSalary.toFixed(2)}</b>`;
  }
  