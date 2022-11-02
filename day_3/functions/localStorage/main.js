const input = document.querySelector('input');
h4 = document.querySelector('h4');

h4.innerHTML = localStorage.getItem('storage');

input.addEventListener('keyup', store);

function store() {
	localStorage.setItem('storage', input.value);
	h4.innerHTML = localStorage.getItem('storage');
}

function remove() {
	localStorage.clear();
}

