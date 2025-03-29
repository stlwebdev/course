
# JavaScript Events

---

# Introduction to JavaScript Events

- Events are actions or occurrences that happen in the browser.
- Examples: clicking a button, moving the mouse, pressing a key.
- JavaScript can "listen" to these events and respond.

---

# Common Event Types

- **Mouse Events**: `click`, `dblclick`, `mouseover`, `mouseout`.
- **Keyboard Events**: `keydown`, `keyup`, `keypress`.
- **Form Events**: `submit`, `change`, `focus`, `blur`.
- **Window Events**: `load`, `resize`, `scroll`.

---

# Adding Event Listeners

- Use `addEventListener` to attach an event to an element.

```javascript
const button = document.querySelector('button');
button.addEventListener('click', () => {
    alert('Button clicked!');
});
```

- Benefits: Can attach multiple listeners and remove them later.

---

# Inline Event Handlers

- Events can also be added directly in HTML.

```html
<button onclick="alert('Button clicked!')">Click Me</button>
```

- Not recommended for complex applications.

---

# Event Object

- When an event occurs, an event object is passed to the handler.

```javascript
document.addEventListener('click', (event) => {
    console.log(event.type); // "click"
    console.log(event.target); // Element clicked
});
```

- Contains useful information about the event.

---

# Preventing Default Behavior

- Some events have default actions (e.g., form submission).

```javascript
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Form submission prevented');
});
```

- Use `event.preventDefault()` to stop them.

---

# Removing Event Listeners

- Use `removeEventListener` to detach an event.

```javascript
function handleClick() {
    console.log('Clicked');
}

button.addEventListener('click', handleClick);
button.removeEventListener('click', handleClick);
```

- The function reference must match.

---

# Example: Click Counter

```html
<button id="counter">Click Me</button>
<p>Clicks: <span id="count">0</span></p>

<script>
    let count = 0;
    const button = document.getElementById('counter');
    const display = document.getElementById('count');

    button.addEventListener('click', () => {
        count++;
        display.textContent = count;
    });
</script>
```

---

# Example: Form Validation

```html
<form id="signup">
    <input type="email" placeholder="Enter your email" required />
    <button type="submit">Sign Up</button>
</form>

<script>
    const form = document.getElementById('signup');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Form submitted successfully!');
    });
</script>
```

---

## Class Project: Dark/Light Theme Toggle Button

- Project overview
- HTML structure for the toggle button
- CSS for dark and light themes
- JavaScript to toggle themes

---

## HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Theme Toggle</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <button id="theme-toggle">Toggle Theme</button>
    <script src="script.js"></script>
</body>
</html>
```

---

## CSS for Themes

```css
body {
    transition: background-color 0.3s, color 0.3s;
}

body.light-theme {
    background-color: white;
    color: black;
}

body.dark-theme {
    background-color: black;
    color: white;
}
```

---

## JavaScript to Toggle Themes

```javascript
document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');
});
```

