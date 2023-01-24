// USING THE REPLACE METHOD

// The replace method takes two arguments:
// 1. The first argument is the string to be replaced.
// 2. The second argument is the string to replace the first argument.

let text = 'This is a long test string';
let newText = text.replace('string', 'text');
console.log(newText);

let newText2 = text.replace(/LONG/i, 'short');
console.log(newText2);

// The replace method can also take a function as the second argument.

let text2 = 'This is a long test string';
let newText3 = text2.replace('long', function (x) {
	return x.toUpperCase();
});
console.log(newText3);

// To replace all occurrences of a string, use the global flag (g).

let text3 = 'This is a very very longer test string';
let newText1 = text3.replace(/very/g, 'much');
console.log(newText1);
