document.getElementById('generate-btn').addEventListener('click', function() {
    const color1 = document.getElementById('color1').value;
    const color2 = document.getElementById('color2').value;
    const body = document.body;
    
    const gradient = `linear-gradient(to right, ${color1}, ${color2})`;
    body.style.background = gradient;
    
    const cssOutput = document.getElementById('css-output');
    cssOutput.textContent = `background: ${gradient};`;
});
