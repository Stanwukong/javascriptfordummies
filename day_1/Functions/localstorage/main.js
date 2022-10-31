const input = document.querySelector('input');
h2 = document.querySelector('h2');

h2.innerHTML = localStorage.getItem('name');

input.addEventListener('keyup', display);

function display() {
	localStorage.setItem('name', input.value);
	h2.innerHTML = localStorage.getItem('name');
}

function clearStorage() {
	localStorage.clear();
}