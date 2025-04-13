# HTML Canvas Basics

---

# Welcome to HTML Canvas

- Learn how to draw and manipulate graphics using HTML Canvas.
- Understand the basics of the Canvas API.
- Create a final project to showcase your skills.

---

# What is HTML Canvas?

- A `<canvas>` element in HTML used for drawing graphics.
- Provides a 2D rendering context for drawing shapes, text, images, and more.
- Requires JavaScript for interaction.

---

# Setting Up Canvas

```html
<canvas id="myCanvas" width="500" height="500"></canvas>
<script>
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
</script>
```

- Use the `getContext('2d')` method to access the drawing context.

---

# Drawing Rectangles

```javascript
ctx.fillStyle = 'blue';
ctx.fillRect(50, 50, 150, 100);
```

- `fillRect(x, y, width, height)` draws a filled rectangle.
- `fillStyle` sets the fill color.

---

# Outlining Rectangles

```javascript
ctx.strokeStyle = 'red';
ctx.strokeRect(50, 50, 150, 100);
```

- `strokeRect(x, y, width, height)` draws an outlined rectangle.
- `strokeStyle` sets the outline color.

---

# Clearing Rectangles

```javascript
ctx.clearRect(60, 60, 130, 80);
```

- `clearRect(x, y, width, height)` clears a rectangular area.

---

# Drawing Lines

```javascript
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(200, 200);
ctx.stroke();
```

- `beginPath()` starts a new path.
- `moveTo(x, y)` moves the pen to a starting point.
- `lineTo(x, y)` draws a line to a point.

---

# Drawing Circles

```javascript
ctx.beginPath();
ctx.arc(150, 150, 50, 0, Math.PI * 2);
ctx.fill();
```

- `arc(x, y, radius, startAngle, endAngle)` draws a circle or arc.

---

# Drawing Text

```javascript
ctx.font = '20px Arial';
ctx.fillStyle = 'black';
ctx.fillText('Hello Canvas', 50, 50);
```

- `font` sets the text style.
- `fillText(text, x, y)` draws filled text.

---

# Outlining Text

```javascript
ctx.strokeText('Outline Text', 50, 100);
```

- `strokeText(text, x, y)` draws outlined text.
