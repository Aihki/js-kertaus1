'use strict';

const a = +prompt('give first side');
const b = +prompt('give second side');
const c = +prompt('give third side');

let type = ``;

if (a === b && b === c && a === c) {
  console.log('its equilateral triangle');
  type = 'its equilateral triangle';
} else if (a === b || b === c || a === c) {
  console.log('its isosceles triangle');
  type = 'its isosceles triangle';
} else if (a !== b && b !== c && a !== c) {
  console.log('its scalene triangle');
  type = 'its scalene triangle';
}

document.getElementById('triangle').textContent = type;
