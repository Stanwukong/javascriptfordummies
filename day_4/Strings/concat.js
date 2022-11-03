// STRING CONCATENATION
// Using the + operator

let color = 'Black';
let object = 'Dog';

let situation = color + ' is the name I gave to my ' + object;
console.log(situation);


// Using the concat method

test2 = color.concat(' is the name I gave to my ', object);
console.log(test2);


// Using template literals

test3 = `${color} is the name I gave to my ${object}`
console.log(test3);