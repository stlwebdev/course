---
# Title slide
title: HTML Language Essentials & Content Elements
description: An in-depth guide on HTML syntax, page structure, head information, and essential content elements.
theme: seriph
highlighter: shiki
---

# Web development

## lesson 1
Aug 25, 2024
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


