// A function that returns a string
function test1() {
	if (0 == false) {
	return 'Hello World';
}
}
console.log(test1()); // string

// A function that returns a number
function test2() {
	if (1 == true) {
	return 1;
}
}
console.log(test2()); // number

// A function that returns a NULL value
function test3() {
	if (null !== false && null !== true) {
	return null;
}
}
console.log(test3()); // null

// A function that returns undefined
function test4() {
	if (undefined !== false && undefined !== true) {
	return undefined;
}
}
console.log(test4()); // undefined