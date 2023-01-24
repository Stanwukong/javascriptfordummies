// Create 2 new elements
const input = document.createElement('input');
const button = document.createElement('button');

// Add content to the new elements
input.setAttribute('type', 'text');
input.setAttribute('placeholder', 'Enter your name');
button.textContent = 'Click me';

// Select the parent element
const parent = document.querySelector('.add');

// Append the new elements to the parent element
parent.appendChild(input);
parent.appendChild(button);