// An if statement
let time = new Date().getHours(); 

if (new Date().getHours() < 12) {
	console.log("Good Morning!");
  }

// An if else statement
if (new Date().getHours() < 2) {
	console.log("Good Morning!");
  }	else {
	console.log("We're past 2am");
  }

// An if else if statement
if (new Date().getHours() < 2) {
	console.log("It's before 2am");
  }
  else if (new Date().getHours() < 12) {
	console.log("Good Morning!");
  }
  else {
	console.log("Hope you're having a great day?");
  }