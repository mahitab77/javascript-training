document.addEventListener('mousemove', showCoords);

function showCoords(event) {
    document.getElementById("demo").innerHTML = `
    <p> X = ${event.clientX} </p>
    <p> Y = ${event.clientY} </p>`;
}
