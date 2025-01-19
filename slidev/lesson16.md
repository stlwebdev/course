# Lesson 16: JavaScript Variables and Data Types

---

##  Introduction
- Introduction to JavaScript Variables and Data Types
-     - In this lesson, we will cover:
        - What variables are
        - How to declare variables
        - Different data types in JavaScript

---

## What is a Variable?
 
### A variable is a container for storing data values.

### Variables allow you to store and manipulate data in your programs.

---

##  Declaring Variables
 
### In JavaScript, you can declare variables using `var`, `let`, or `const`.

```javascript
var name = "John";
let age = 30;
const isStudent = true;
```

---

## `var` Keyword

- `var` is function-scoped.
- Can be re-declared and updated.


```javascript
var city = "New York";
var city = "Los Angeles"; // Re-declaration is allowed
city = "Chicago"; // Update is allowed
```

---

## `let` Keyword

- `let` is block-scoped.
- Cannot be re-declared in the same scope but can be updated.

```javascript
let country = "USA";
// let country = "Canada"; // Error: Identifier 'country' has already been declared
country = "Canada"; // Update is allowed
```

---

## `const` Keyword

- `const` is block-scoped.
- Cannot be re-declared or updated.

```javascript
const birthYear = 1990;
// birthYear = 1991; // Error: Assignment to constant variable
```

---

## Data Types

- JavaScript has several data types:
    - Primitive types
    - Reference types

---

## Primitive Data Types
- Primitive Data Types
- 
    - Primitive data types include:
        - String
        - Number
        - Boolean
        - Null
        - Undefined
        - Symbol (ES6)

---

```javascript
let name = "Alice"; // String
let age = 25; // Number
let isStudent = false; // Boolean
let address = null; // Null
let phone; // Undefined
let id = Symbol("id"); // Symbol
```

---

## String

- Strings are used to represent text.
- Can be enclosed in single quotes, double quotes, or backticks.

```javascript
let greeting = "Hello, World!";
let response = 'Hi there!';
let template = `Welcome, ${name}!`;
```

---

##  Number

- Numbers represent both integer and floating-point values.

```javascript
let integer = 42;
let float = 3.14;
```

---

##  Boolean

- Booleans represent logical values: `true` or `false`.

```javascript
let isActive = true;
let isComplete = false;
```

---

##  Null

- `null` represents the intentional absence of any object value.

```javascript
let result = null;
```

---

##  Undefined

- `undefined` means a variable has been declared but not assigned a value.

```javascript
let data;
console.log(data); // undefined
```

---

##  Symbol
 
- Symbols are unique and immutable primitive values.
- Used to create unique identifiers.

```javascript
let sym1 = Symbol("key");
let sym2 = Symbol("key");
console.log(sym1 === sym2); // false
```

---

##  Reference Data Types
 
    - Reference data types include:
        - Objects
        - Arrays
        - Functions

---

##  Object

- Objects are collections of key-value pairs.

```javascript
let person = {
    name: "John",
    age: 30,
    isStudent: true
};
```

---

##  Array

- Arrays are ordered collections of values.

```javascript
let numbers = [1, 2, 3, 4, 5];
let fruits = ["apple", "banana", "cherry"];
```

---

##  Function

- Functions are reusable blocks of code.

```javascript
function greet(name) {
    return `Hello, ${name}!`;
}
```

---

##  Type Conversion

- JavaScript can convert data types automatically (type coercion) or manually.

```javascript
let num = "123";
let convertedNum = Number(num); // Manual conversion
let sum = num + 1; // Automatic conversion (type coercion)
```

---

##  Summary

- We covered:
    - Variables and how to declare them
    - Primitive and reference data types
    - Type conversion
- Practice using variables and data types in your own code.

---


##  Exercise

- Create a JavaScript program that:
    - Declares variables using `var`, `let`, and `const`
    - Uses different data types
    - Converts a string to a number and performs an arithmetic operation

---

##  Additional Resources
- Additional Resources
- 
    - [MDN Web Docs: JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
    - [JavaScript.info](https://javascript.info/)

