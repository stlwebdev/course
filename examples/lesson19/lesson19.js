let fruits = ["apple", "banana", "orange"];
console.log(fruits.length); // 3
console.log(fruits[2]); // orange

// add element by push method
fruits.push("mango");
console.log(fruits); // ["apple", "banana", "orange", "mango"]
fruits.push("kiwi");
console.log(fruits.length); // 5
// remove element by pop method
const popped = fruits.pop();
console.log(popped); // kiwi
console.log(fruits); // ["apple", "banana", "orange", "mango"]
//using for loop to iterate over the array
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// using for of loop to iterate over the array
for (let fruit of fruits) {
    console.log(fruit);
}
// updatating array element
fruits[0] = "grapes";
console.log(fruits); // ["grapes", "banana", "orange", "mango"]

// get a sum of all elements in an array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
for (let number of numbers) {
    sum += number;
}
console.log(sum); // 55

// using reduce to get sum of all elements in an array
let total = numbers.reduce((acc, curr) => acc + curr);
console.log(total); // 55

//using map method to get square of all elements in an array
let squares = numbers.map((number) => number * number);
console.log(squares); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

// using filter method to get even numbers from an array
let evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers); // [2, 4, 6, 8, 10]
