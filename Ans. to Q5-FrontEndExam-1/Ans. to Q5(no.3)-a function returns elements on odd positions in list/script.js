document.getElementById('list-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const inputList = document.getElementById('input-list').value.split(',').map(item => item.trim());
    const oddPositionElements = getOddPositionElements(inputList);
    
    document.getElementById('result').textContent = `Elements on odd positions: ${oddPositionElements.join(', ')}`;
});

function getOddPositionElements(arr) {
    let result = [];
    for (let i = 1; i < arr.length; i += 2) {
        result.push(arr[i]);
    }
    return result;
}
