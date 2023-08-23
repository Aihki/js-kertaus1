'use strict';

const a = Number(prompt('give first side'));
const b = Number(prompt('give second side'));
const c = Number(prompt('give third side'));

if (a == b && b == c && a == c) {
  console.log('its equilateral triangle');
  document.getElementById('triangle').textContent = 'its equilateral triangle';
} else if (a == b || b == c || a == c) {
  console.log('its isosceles triangle');
  document.getElementById('triangle').textContent = 'its isosceles triangle';
} else if (a != b || b != c || a != c) {
  console.log('its scalene triangle');
  document.getElementById('triangle').textContent = 'its scalene triangle';
}
