// Create 3 new elements
const p = document.createElement('p');
const input = document.createElement('input');
const button = document.createElement('button');
const br = document.createElement('br');
// Add content to the new element
p.innerHTML = 'Day 2 of JavaScript for dummies';
input.setAttribute('type', 'text');
input.setAttribute('placeholder', 'Enter your name');
button.textContent = 'Click me';
// Select the parent element
const body = document.querySelector('body');
// Append the new element to the parent element
body.appendChild(p);
body.appendChild(input);
body.appendChild(br);
body.appendChild(button);