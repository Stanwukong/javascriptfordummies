// ADD ELEMENTS TO THE DOM

// Create 3 new paragraph elements.
test1 = document.querySelector('body');
test2 = document.createElement('p');
test3 = document.createElement('p');
test4 = document.createElement('p');

test1.appendChild(test2);
test1.appendChild(test3);
test1.appendChild(test4);
// Add text to the paragraph elements.
test2.innerHTML = 'This is the first addition';
test3.innerHTML = 'This is another addition';
test4.innerHTML = 'This is a third addition';

// REMOVE ELEMENTS FROM THE DOM
test1.removeChild(test2);
test1.removeChild(test3);
test1.removeChild(test4);