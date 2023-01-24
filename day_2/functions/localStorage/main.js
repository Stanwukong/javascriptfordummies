const input = document.querySelector('input');
const h3 = document.querySelector('h3');

h3.innerHTML = localStorage.getItem('name');

input.addEventListener('keydown', store);

function store() {
	localStorage.setItem('name', input.value);
	h3.innerHTML = localStorage.getItem('name');
}

function clearStorage() {
	input.value = '';
	h3.innerHTML = '';
	localStorage.clear();
}