// Extracting Substrings
const city = 'Lagos City';
const tring = 'This is a string of letters';

// Getting the first two characters of a string
console.log(city.substring(0, 2));

// Getting the last two characters of a string
console.log(tring.substring(tring.length - 2));

const bio = 'My name is Oluwafemi Ajanaku. I am a software engineering trainee';


// Getting the job I do
const job = bio.indexOf('I');
console.log(job); // 30
console.log(bio.substring(job));