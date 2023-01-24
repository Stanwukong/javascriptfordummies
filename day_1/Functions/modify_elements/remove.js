// FIRST ADD ELEMENTS TO THE DOM

test1 = document.getElementById('testing-area')
test1.innerHTML = 'Hello World'

test2 = document.createElement('p')
test2.innerHTML = 'This is the first addition'

test3 = document.createElement('p')
test3.innerHTML = 'This is another addition'

test4 = document.createElement('p')
test4.innerHTML = 'You can\'t stop me || Muhahahah'


test1.appendChild(test2)
test1.appendChild(test3)
test1.appendChild(test4)


// NOW REMOVE ELEMENTS FROM THE DOM

test1.removeChild(test2)
test1.removeChild(test3)
test1.removeChild(test4)



