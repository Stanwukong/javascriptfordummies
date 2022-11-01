// FINESSE THE PROPERTIES OF THE ELEMENTS

// Change the font size of the text elements to 20px.
test1 = document.querySelector('p')
test1.style.fontSize = '20px';

// Change the input element to a password input.
test2 = document.querySelector('input');
test2.setAttribute('type', 'password');

// Change the placeholder text of the input element to 'Enter your password'.
test2.setAttribute('placeholder', 'Enter your password');

// Change the text of the button element to 'Submit'.
test3 = document.querySelector('button');
test3.innerHTML = 'Submit';