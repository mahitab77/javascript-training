document.getElementById('vowel-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const inputString = document.getElementById('input-string').value;
    const vowelCount = countVowels(inputString);
    
    document.getElementById('result').textContent = `Number of vowels: ${vowelCount}`;
});

function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
