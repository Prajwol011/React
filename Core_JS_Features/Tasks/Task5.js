// Task 5 – Object Destructuring
// Create an object person with keys name, age, and country. Destructure the object to extract name and country into variables and log them.

const person = {
    name: "Prajwol",
    age: 19,
    country: "Nepal"
}

const{name,country} = person;
console.log(name);
console.log(country);