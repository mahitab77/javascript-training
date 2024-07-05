const PI = Math.PI; // Use built-in PI constant

function calculate() {
  const radius = parseFloat(document.getElementById("radius").value);
  
  if (isNaN(radius)) {
    alert("Please enter a valid number for radius!");
    return;
  }

  const area = PI * radius * radius;
  const circumference = 2 * PI * radius;

  document.getElementById("area").textContent = `Area: ${area.toFixed(2)}`;
  document.getElementById("circumference").textContent = `Circumference: ${circumference.toFixed(2)}`;
}
