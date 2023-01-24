// STRING CONCANTENATION
// 1. Using the + operator

let firstName = 'Oluwafemi';
let lastName = 'Ajanaku';

let fullName = firstName + ' ' + lastName;
console.log(fullName);

// 2. Using the concat() method
const name = firstName.concat(' ', lastName);
console.log(name);

// Combination of both methods
const intro = 'My name is ' + firstName.concat(lastName);
console.log(intro);
g