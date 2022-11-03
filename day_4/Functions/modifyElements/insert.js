const body = document.querySelector('body');
const div = document.createElement('div');
const header = document.createElement('h1');
const paragraph = document.createElement('p');

header.innerHTML = 'Hello World';
paragraph.innerHTML = `Lorem ipsum dolor sit amet, 
					   consectetur adipisicing elit. 
					   Quisquam, quod, voluptate, 
					   voluptates, quae, quia, quibusdam 
					   voluptatem quidem quas dolorum 
					   nesciunt quos nemo voluptatum. 
					   Quisquam, quod, voluptate, voluptates, 
					   quae, quia, quibusdam voluptatem 
					   quidem quas dolorum nesciunt quos 
					   nemo voluptatum.`;


// ADDING ELEMENTS TO THE DOM    
body.appendChild(div);
div.appendChild(header);
div.appendChild(paragraph);

// CHANGING PROPERTIES OF ELEMENTS IN THE DOM

header.innerHTML = `FEMI'S PLAYGROUND`; // CHANGING THE INNER HTML OF THE HEADER

div.style.backgroundColor = 'rgb(255, 126, 2)'; // CHANGING THE BACKGROUND COLOR OF THE DIV
div.style.textAlign = 'center'; // CHANGING THE TEXT ALIGNMENT OF THE DIV

// REMOVING ELEMENTS FROM THE DOM

body.removeChild(div);

// UNcomment the line above to view changes