document.getElementById('generate-table').addEventListener('click', function() {
  const columns = [
      document.getElementById('column-1'),
      document.getElementById('column-2'),
      document.getElementById('column-3'),
      document.getElementById('column-4')
  ];

  // Clear previous content
  columns.forEach(column => column.innerHTML = '');

  // Distribute tables across columns
  for (let i = 1; i <= 12; i++) {
      const column = columns[Math.floor((i - 1) / 3)];
      const table = document.createElement('div');
      for (let j = 1; j <= 12; j++) {
          const result = i * j;
          const row = document.createElement('div');
          row.textContent = `${i} * ${j} = ${result}`;
          table.appendChild(row);
      }
      column.appendChild(table);
      const separator = document.createElement('div');
      separator.textContent = '==================';
      column.appendChild(separator);
  }
});
