function calculate() {
    const length = document.getElementById("length").value;
    const width = document.getElementById("width").value;
  
    // Input validation (optional but recommended)
    if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
      alert("Please enter valid positive numbers for length and width.");
      return;
    }
  
    const perimeter = 2 * (length + width);
    const area = length * width;
  
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
      Perimeter: <b>${perimeter}</b><br>
      Area: <b>${area.toFixed(2)}</b>  `;
  }
  