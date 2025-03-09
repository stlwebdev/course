# Introduction to JavaScript DOM

---

## What is the DOM?

- DOM stands for Document Object Model
- It is a programming interface for web documents
- Represents the page so that programs can change the document structure, style, and content

---

## Why is the DOM Important?

- Allows JavaScript to interact with HTML and CSS
- Enables dynamic content updates
- Essential for creating interactive web applications

---

## Accessing DOM Elements

- Use `document.getElementById('id')` to access an element by its ID
- Use `document.querySelector('selector')` to access the first element that matches a CSS selector

```javascript
const element = document.getElementById('myElement');
const firstParagraph = document.querySelector('p');
```

---

## Modifying DOM Elements

- Change content with `element.textContent` or `element.innerHTML`
- Modify attributes with `element.setAttribute('attribute', 'value')`

```javascript
element.textContent = 'Hello, World!';
element.setAttribute('class', 'newClass');
```

---

## Adding and Removing Elements

- Create new elements with `document.createElement('tag')`
- Append elements using `parent.appendChild(child)`
- Remove elements with `parent.removeChild(child)`

```javascript
const newDiv = document.createElement('div');
document.body.appendChild(newDiv);
document.body.removeChild(newDiv);
```

---

## Event Listeners

- Use `element.addEventListener('event', function)` to handle events
- Common events: `click`, `mouseover`, `keydown`

```javascript
element.addEventListener('click', () => {
    alert('Element clicked!');
});
```

---

## Practice: Changing Text on Button Click

1. Create a button element in HTML
2. Use JavaScript to change the button text when clicked

```html
<button id="myButton">Click me</button>
<script>
    const button = document.getElementById('myButton');
    button.addEventListener('click', () => {
        button.textContent = 'Clicked!';
    });
</script>
```

---

## Practice: Adding New List Items

1. Create an unordered list in HTML
2. Use JavaScript to add new list items when a button is clicked

```html
<ul id="myList"></ul>
<button id="addItem">Add Item</button>
<script>
    const list = document.getElementById('myList');
    const button = document.getElementById('addItem');
    button.addEventListener('click', () => {
        const newItem = document.createElement('li');
        newItem.textContent = 'New Item';
        list.appendChild(newItem);
    });
</script>
```

---

## Summary

- The DOM is a crucial part of web development
- Allows manipulation of HTML and CSS through JavaScript
- Practice accessing, modifying, and interacting with DOM elements
