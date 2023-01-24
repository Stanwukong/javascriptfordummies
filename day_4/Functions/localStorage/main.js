// alert('Hello');

const input = document.querySelector('input');
h3 = document.querySelector('h3');

h3.innerHTML = localStorage.getItem('storage');

input.addEventListener('keyup', store);

function store() {
	localStorage.setItem('storage', input.value);
	h3.innerHTML = localStorage.getItem('storage');
}

function remove() {
	localStorage.clear();
}


