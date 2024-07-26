document.getElementById('string-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const inputString = document.getElementById('input-string').value;
  const length = getStringLength(inputString);
  
  document.getElementById('result').textContent = `The length of the string is: ${length}`;
});

function getStringLength(str) {
  if (str === "") {
      return 0;
  } else {
      return 1 + getStringLength(str.substring(1));
  }
}
