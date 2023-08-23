'use strict';

const number = +prompt('give your assesment');

console.log(number);

if (number >= 0 && number <= 39) {
  console.log('your grade is 0');
  document.getElementById('grade').textContent = 'your grade is 0';
} else if (number >= 40 && number <= 51) {
  console.log('your grade is 1');
  document.getElementById('grade').textContent = 'your grade is 1';
} else if (number >= 52 && number <= 63) {
  console.log('your grade is 2');
  document.getElementById('grade').textContent = 'your grade is 2';
} else if (number >= 64 && number <= 75) {
  console.log('your grade is 3');
  document.getElementById('grade').textContent = 'your grade is 3';
} else if (number >= 76 && number <= 87) {
  console.log('your grade is 4');
  document.getElementById('grade').textContent = 'your grade is 4';
} else if (number >= 88 && number <= 100) {
  console.log('your grade is 5');
  document.getElementById('grade').textContent = 'your grade is 5';
}
