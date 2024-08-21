---
# Title slide
title: HTML Language Essentials & Content Elements
description: An in-depth guide on HTML syntax, page structure, head information, and essential content elements.
theme: seriph
highlighter: shiki
---

# Introduction to HTML

HTML (HyperText Markup Language) is the standard language for creating web pages.

It structures web content using elements represented by tags.

**Why HTML?**
  - Provides the foundation for web development.
  - Easy to learn and widely supported across browsers.
  - Allows integration with CSS and JavaScript for full-stack web development.

---

# HTML Language Essentials

<img src="/imgs/1/1.png" />

---

## HTML Syntax: Introduction
- HTML uses elements defined by tags, which are enclosed in angle brackets.
- Tags generally come in pairs: an opening tag and a closing tag.
- Example:
```html
<p>This is a paragraph.</p>
```

---

## HTML Syntax: Elements and Attributes

- Elements may contain attributes that provide additional information.
- Example of an element with an attribute:

```html
<a href="https://example.com">Visit Example</a>
```

- The `href` attribute specifies the link's destination.

---

## HTML Syntax: Self-Closing Tags

- Some HTML elements do not require closing tags.
- These are known as self-closing tags.
- Example:

```html
<img src="image.jpg" alt="Description" />
```

---

## HTML Syntax: Nested Elements

- HTML elements can be nested within each other.
- Example:

```html
<div>
  <p>This is a paragraph inside a div.</p>
</div>
```

- The nested structure defines the relationship between elements.

---

## HTML Page Structure: The Doctype

- The `<!DOCTYPE html>` declaration defines the document type.
- It helps browsers understand the version of HTML being used.
- Always place the `DOCTYPE` at the beginning of the HTML document.

---

## HTML Page Structure: The Root Element

- The `<html>` tag is the root of the HTML document.
- All other elements are contained within this tag.
- The `<html>` element also includes the `lang` attribute to specify the language.

```html
<html lang="en">
```

```html
<html>
     <head>
     </head>
     <body>
          <div>
              <p>Hi</p>
         </div>
    </body>
</html>
```
<img src="/imgs/1/2.png" width="150" />

---
layout: image-right
image: /imgs/1/3.png
backgroundSize: contain
---

# DOM is a tree

Every node can only have one parent, and every node can have several children, so the structure looks like a tree

---

## HTML Page Structure: The Head Section

- The `<head>` section contains meta-information about the document.
- It typically includes:
  - `<title>`: The title of the document.
  - `<meta>` tags: Metadata such as character set and viewport settings.
  - `<link>`: References to external resources like stylesheets.

---

## HTML Page Structure: The Body Section

- The `<body>` section contains the content visible to users.
- Everything inside the `<body>` tag is rendered on the page.
- Example structure:

```html
<body>
  <h1>Welcome to My Website</h1>
  <p>This is the main content area.</p>
</body>
```

---

## Head Information: Title Element

- The `<title>` element sets the title of the webpage, which appears on the browser tab.
- Example:

```html
<title>My Awesome Webpage</title>
```

---

## Head Information: Meta Tags

- Meta tags provide metadata such as character encoding, author, and viewport settings.
- Example:

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

---

## Head Information: Link and Style Tags

- The `<link>` tag connects external resources like stylesheets.
- Example:

```html
<link rel="stylesheet" href="styles.css">
```

- The `<style>` tag allows for internal CSS styles directly in the HTML.

```html
<style>
  body { font-family: Arial, sans-serif; }
</style>
```

---

## Head Information: Script Tag

- The `<script>` tag is used to include JavaScript in an HTML document.
- Example:

```html
<script src="script.js"></script>
```

- You can also write inline JavaScript within a `<script>` tag.

---

# HTML Content Elements

---

## Heading Elements: Importance of Headings

- HTML provides six levels of headings, from `<h1>` to `<h6>`.
- Headings help structure the content and improve accessibility.
- Example:

```html
<h1>Main Heading</h1>
<h2>Subheading</h2>
```

---

## Heading Elements: Best Practices

- Use `<h1>` for the main title of the page.
- Subheadings should follow a hierarchical order (`<h2>`, `<h3>`, etc.).
- Avoid skipping heading levels to maintain a clear structure.

---

## Paragraphs & Text: The Paragraph Tag

- The `<p>` tag defines a paragraph of text.
- Example:

```html
<p>This is a paragraph.</p>
```

- Paragraphs provide a way to group sentences and create separation in text.

---

## Paragraphs & Text: Line Breaks and Emphasis

- The `<br>` tag inserts a line break without starting a new paragraph.
- Example:

```html
<p>Line one.<br>Line two.</p>
```

- The `<strong>` and `<em>` tags are used for bold and italic text, respectively.

---

## Paragraphs & Text: Inline vs. Block Elements

- Paragraphs are block-level elements, meaning they take up the full width available.
- Inline elements (e.g., `<strong>`, `<em>`) only take up as much space as necessary.
- Example:

```html
<p>This is a <strong>strong</strong> word in a paragraph.</p>
```

---

## List Elements: Unordered Lists

- The `<ul>` tag creates an unordered list with bullet points.
- Each list item is defined with the `<li>` tag.
- Example:

```html
<ul>
  <li>First item</li>
  <li>Second item</li>
</ul>
```

---

## List Elements: Ordered Lists

- The `<ol>` tag creates an ordered list with numbered items.
- Like unordered lists, items are defined with the `<li>` tag.
- Example:

```html
<ol>
  <li>First item</li>
  <li>Second item</li>
</ol>
```

---

## List Elements: Nested Lists

- Lists can be nested inside other lists to create subcategories.
- Example:

```html
<ul>
  <li>Item 1
    <ul>
      <li>Subitem 1</li>
    </ul>
  </li>
</ul>
```

---

## Anchor Element: Creating Links

- The `<a>` tag creates hyperlinks to other documents or web pages.
- The `href` attribute specifies the link's destination.
- Example:

```html
<a href="https://example.com">Visit Example</a>
```

---

## Anchor Element: Link Attributes

- The `target="_blank"` attribute opens the link in a new tab.
- Example:

```html
<a href="https://example.com" target="_blank">Open in New Tab</a>
```

- The `title` attribute provides additional information when the mouse hovers over the link.

---

## Button Element: Basic Button

- The `<button>` element represents a clickable button.
- Example:

```html
<button>Click Me</button>
```

- Buttons can trigger actions, submit forms, or be styled as links.

---

## Button Element: Customizing Buttons

- Buttons can be customized with CSS for different styles.
- Example:

```html
<button style="background-color: blue; color: white;">Styled Button</button>
```

- Buttons can also contain icons or images.

---

## Image Element: Adding Images

- The `<img>` tag is used to embed images in an HTML document.
- The `src` attribute specifies the image file's location.
- Example:

```html
<img src="image.jpg" alt="Description">
```

---

## Image Element: Alt Text and Accessibility

- The `alt` attribute provides alternative text for the image.
- This is important for accessibility and for cases when the image cannot be displayed.
- Example:

```html
<img src="image.jpg" alt="A scenic view">
```

---

## Image Element: Sizing and Styling

- Images can be resized using the `width` and `height` attributes.
- Example:

```html
<img src="image.jpg" alt="Description" width="200" height="100">
```

- CSS can also be used to style images (e.g., adding borders or shadows).

---

# Conclusion

- In this presentation, we've explored HTML syntax, page structure, head information, and key content elements.
- Mastery of these fundamentals is crucial for building well-structured and accessible web pages.
- Keep practicing by creating your own HTML documents and experimenting with different elements.
