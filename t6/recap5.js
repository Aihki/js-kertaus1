'use strict';

const posInt = +prompt('give positive number');
let sum = 0;

for (let i = 1; i <= 5; i++) {
  sum += i;
}
document.getElementById('sum').textContent = `positive number sum is ${sum}`;
