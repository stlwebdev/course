# Lesson 17: JavaScript Input and Output, Basic operators

---

# Introduction to Input and Output

- JavaScript can interact with users through input and output.
- Input: Data received from the user.
- Output: Data displayed to the user.
- Common methods: `prompt()`, `alert()`, `console.log()`.

---

# Using `prompt()` for Input

- `prompt()` displays a dialog box that prompts the user for input.
- Syntax: `let userInput = prompt("Enter your name:");`
- The input is returned as a string.

---

# Using `alert()` for Output

- `alert()` displays a dialog box with a message.
- Syntax: `alert("Hello, World!");`
- Useful for simple notifications.

---

# Using `console.log()` for Output

- `console.log()` outputs messages to the web console.
- Syntax: `console.log("This is a message");`
- Ideal for debugging and logging information.

---

# Combining Input and Output

- Example: Prompt user for name and greet them.

```javascript
    let name = prompt("Enter your name:");
    alert("Hello, " + name + "!");
    console.log("User's name is " + name);
```

---

# Handling Numbers with `prompt()`

- `prompt()` returns a string, so numbers need conversion.
- Use `parseInt()` or `parseFloat()` to convert.
- Example: `let age = parseInt(prompt("Enter your age:"));`

---

# Validating User Input

- Always validate user input to ensure it meets expectations.
- Example: Check if input is a number.

```javascript
    let age = parseInt(prompt("Enter your age:"));
    if (isNaN(age)) {
        alert("Please enter a valid number.");
    }
```

---

# Summary of Input and Output

- Input and output are essential for user interaction.
- Use `prompt()` for input, `alert()` for simple output, and `console.log()` for debugging.
- Always validate and handle user input appropriately.

---

# Basic Operators

---

# Introduction to Basic Operators

- Operators perform operations on variables and values.
- Categories: Arithmetic, Assignment, Comparison, Logical.

---

# Arithmetic Operators

- Perform mathematical operations.
- Examples: `+`, `-`, `*`, `/`, `%`.
- Example: `let sum = 10 + 5;`

---

# Assignment Operators

- Assign values to variables.
- Examples: `=`, `+=`, `-=`, `*=`, `/=`.
- Example: `let x = 10; x += 5;`

---

# Comparison Operators

- Compare two values and return a boolean.
- Examples: `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`.
- Example: `let isEqual = (5 == '5');`

---

# Logical Operators

- Perform logical operations.
- Examples: `&&`, `||`, `!`.
- Example: `let result = (true && false);`

---

# Combining Operators

- Operators can be combined in expressions.
- Example: `let result = (5 + 10) * 2;`

---

# Operator Precedence

- Determines the order in which operators are evaluated.
- Example: Multiplication before addition.
- Example: `let result = 5 + 10 * 2; // result is 25`

---

# Summary of Basic Operators

- Operators are fundamental for performing operations.
- Understand different types and their usage.
- Practice combining operators and understanding precedence.
