// 1. Create a new element
const newElement = document.createElement('p');
// 2. Add content to the new element
newElement.textContent = 'Hello World';
// 3. Select the parent element
const parentElement = document.querySelector('.cont');
// 4. Append the new element to the parent element
parentElement.appendChild(newElement);

// 1. Create a new element
const newer = document.createElement('p');
// 2. Add content to the new element
newer.textContent = 'Hello Humans';
// 3. Select the parent element
const parent = document.querySelector('.cont');
// 4. Append the new element to the parent element
parent.appendChild(newer);

const gold = document.createElement('input');
gold.setAttribute('type', 'text');
gold.setAttribute('placeholder', 'Enter your name');
const arent = document.querySelector('.cont');
arent.appendChild(gold);



