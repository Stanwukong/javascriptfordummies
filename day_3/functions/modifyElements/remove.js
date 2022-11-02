// Add elements to the DOM

document.getElementById('one').textContent = 'Hello World';
document.getElementById('2').textContent = 'This is the second addition';
test = document.createElement('p');
test.textContent = 'This is the third addition';
document.getElementById('3').appendChild(test);

// Remove elements from the DOM

// convert the comment below to code to see the changes

// document.getElementById('one').remove();
// document.getElementById('2').remove();
// document.getElementById('3').removeChild(test);