// EXTRACTING STRING PARTS
// Using the slice() method

let text = 'This is a long test string';

// This method extracts a part of a string and returns the extracted part in a new string.
let shortText = text.slice(15);
console.log(shortText);

let reverse = text.slice(-11, -6);
console.log(reverse);

// Using the substring() method

let str = text.substring(7, 11);
console.log(str);

let str2 = text.substring(11);
console.log(str2);

// Using the substr() method
// substr() is similar to slice().
// The difference is that the second parameter specifies the length of the extracted part.

let example = text.substr(8, 3);
console.log(example);

let example1 = text.substr(-4, 5);
console.log(example1);