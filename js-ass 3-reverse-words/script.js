function reverseString() {
    const inputText = document.getElementById("inputText").value;
    const reversedText = inputText.split("").reverse().join("");
    document.getElementById("output").textContent = `Reversed String: ${reversedText}`;
  }
  