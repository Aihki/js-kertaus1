'use strict';

const x1 = prompt('give first x cordination');
const x2 = prompt('give second x cordination');
const y1 = prompt('give  firsty cordination');
const y2 = prompt('give second y cordination');

const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

console.log(distance);
document.getElementById(
  'distance'
).textContent = `distance of the dots are  ${distance}`;
