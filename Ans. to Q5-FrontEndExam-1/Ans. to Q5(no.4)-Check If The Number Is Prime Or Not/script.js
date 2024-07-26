document.getElementById('prime-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const inputNumber = parseInt(document.getElementById('input-number').value);
    const isPrime = checkPrime(inputNumber);
    
    document.getElementById('result').textContent = isPrime ? `${inputNumber} is a prime number.` : `${inputNumber} is not a prime number.`;
});

function checkPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    
    return true;
}
