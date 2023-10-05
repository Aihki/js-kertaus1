'use strict';

const posInt = +prompt('give positive number');
const table = document.createElement('table');

for (let i = 1; i <= posInt; i++) {
  const row = document.createElement('tr');
  for (let j = 1; j <= posInt; j++) {
    const cell = document.createElement('td');
    cell.textContent = (i * j).toString();
    row.appendChild(cell);
  }
  table.appendChild(row);
}

const multiTable = document.querySelector('#multiplication');
multiTable.appendChild(table);
