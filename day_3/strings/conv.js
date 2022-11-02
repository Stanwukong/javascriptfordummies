// CONVERTING STRINGS TO ARRAYS

let text = 'a,b,c,d,e,f,g';
let array = text.split(',');
// console.log(array);

let text1 = 'Hello World';
const myArray = text1.split('');
// console.log(myArray);

 let text2 = '';  //An empty string
while (i = 0, i < myArray.length){
	text2 += myArray[i] + "<br>";
	i++;
}
console.log(text2);