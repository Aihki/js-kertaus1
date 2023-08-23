'use strict';

const celsius = prompt('give temperature in Celsius');

const fahrenheit = (celsius * 9) / 5 + 32;

const kelvin = +celsius + 273.15;

document.getElementById('cels').textContent = `${celsius} celius is
  ${fahrenheit} in Fahrenheit
   and
  ${kelvin} in kelvin`;
