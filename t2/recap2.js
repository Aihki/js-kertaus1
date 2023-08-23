'use strict';

const cordinationOne = +prompt(
  'give first x and y cordinations, put space between the numbers'
);
const cordinationTwo = +prompt(
  'give second x and y cordinations, put space between the numbers'
);

const first = cordinationOne.split('');
const x1 = first[0];
const y1 = first[2];

const second = cordinationTwo.split('');
const x2 = second[0];
const y2 = second[2];

const distance = Math.sqrt((x2 - x1) ^ (2 + (y2 - y1)) ^ 2);

console.log(distance);
document.getElementById(
  'distance'
).textContent = `distance of the dots are  ${distance}`;
