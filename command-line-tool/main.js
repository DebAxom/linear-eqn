import SolveEquation from './linear-equation.js';

console.log('\nWelcome to liner equation solver!\n');

let equation = prompt('Enter a liner equation: \n\nf(x)=');

console.log(`=> x = ${SolveEquation(equation)}`);