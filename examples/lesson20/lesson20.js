// create a new object
const person = {
    name: "John",
    age: 33,
    city: "New York",
    favFruits: ["apple", "banana", "orange"],
};
console.log(person);
console.log(person.name);
console.log(person["age"]);
person.age = 44;
console.log(person.age);
person.country = "USA";
console.log(person);
delete person.city;
console.log(person);

// creata a new function for practice
function greet(name) {
    return `Hello, ${name}`;
}
console.log(greet("John"));

function sum(a, b) {
    return a + b;
}
console.log(sum(2, 3));

const sumArrow = (a, b) => a + b;
console.log(sumArrow(2, 3));
