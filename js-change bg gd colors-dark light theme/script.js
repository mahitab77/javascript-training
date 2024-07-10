document.getElementById('light-theme').addEventListener('click', function() {
    document.body.style.background = 'white';
    document.querySelector('.header').style.color = 'black';
  });
  
  document.getElementById('color1').addEventListener('input', function(e) {
    updateGradient();
  });
  
  document.getElementById('color2').addEventListener('input', function(e) {
    updateGradient();
  });
  
  document.getElementById('dark-theme').addEventListener('click', function() {
    document.body.style.background = 'black';
    document.querySelector('.header').style.color = 'white';
  });
  
  function updateGradient() {
    var color1 = document.getElementById('color1').value;
    var color2 = document.getElementById('color2').value;
    document.body.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
  }
  