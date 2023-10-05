'use strict';

const posInt = +prompt('give positive number');

const table = document.createElement('table');

for (let i = 0; i <= posInt; i++) {
  const row = document.createElement('tr');
  for (let j = 0; j <= posInt; j++) {
    const column = document.createElement('td');
    let val = i * j;
    if (val === 0) {
      val = i || j;
      val = val ? val : '';
      column.classList.add('header');
    }
    column.textContent = val;
    row.appendChild(column);
  }
  table.appendChild(row);
}
document.body.appendChild(table);
