---
# Title slide
title: Introduction to CSS
description: 
theme: seriph
highlighter: shiki
---

# Web development

## lesson 8

Oct 20, 2024

---

# CSS Syntax Structure 2

- **Selectors**
  - Selectors define which HTML elements the style will apply to.
  - Can target elements by:
    - **Type** (e.g., `p`, `h1`): Selects all elements of that type.
    - **Class** (e.g., `.example`): Selects all elements with that class.
    - **ID** (e.g., `#unique`): Selects the element with that specific ID.
    - **Attribute** (e.g., `[type="text"]`): Selects elements with specific attributes.
    - **Combinations**: Can combine selectors to increase specificity or target multiple elements.
  - Example:

    ```css
    .button-primary {
      background-color: green;
      color: white;
    }
    ```

---

# CSS Syntax Structure 3

- **Declaration Block**
  - Enclosed in curly braces `{}`, containing one or more declarations.
  - Each **declaration** has:
    - A **property** (e.g., `color`, `font-size`, `margin`): Defines the aspect of the element to style.
    - A **value** (e.g., `blue`, `16px`, `auto`): Specifies the style applied to that property.
  - Properties and values are separated by a colon (`:`) and end with a semicolon (`;`).
  - Multiple declarations can be added within one declaration block, separated by semicolons.

---

# CSS Syntax Structure 4

- **Importance of Semicolons and Formatting**
  - Semicolons (`;`) are crucial to separate multiple declarations within a block.
  - Correct syntax ensures styles are applied as expected.
  - Formatting with proper indentation and line breaks improves readability and maintainability.

---

# CSS Syntax Structure 5

- **Example of a Complex CSS Rule**
  - Example:

    ```css
    #header .nav-item:hover {
      background-color: #333;
      color: #fff;
      border-bottom: 2px solid orange;
    }
    ```

  - In this example:
    - Selector `#header .nav-item:hover` targets `.nav-item` elements within an element with the ID `header` when hovered.
    - The declarations set background and text color and add a border effect on hover.

---

# CSS Colors: Basics

- **What Are CSS Colors?**
  - CSS colors define the appearance of elements by specifying color values for properties like `color`, `background-color`, `border-color`, etc.
  - Colors enhance visual appeal and are essential for readability, branding, and design aesthetics.

- **Common CSS Color Properties:**
  - `color`: Changes text color.
  - `background-color`: Sets the background color of an element.
  - `border-color`: Defines border color.

- **Example:**

  ```css
  p {
    color: darkgreen;
    background-color: lightyellow;
  }
  ```

---

# CSS Colors: Named Colors

- **What Are Named Colors?**
  - CSS provides 140 named colors (e.g., `red`, `blue`, `lightgray`) that can be directly used without specifying values.
  - Named colors are simple to remember and use, making them convenient for quick styling.

- **Examples of Named Colors:**
  - Primary colors: `red`, `green`, `blue`
  - Neutral colors: `black`, `white`, `gray`
  - Other examples: `cyan`, `magenta`, `orange`, `violet`

- **Usage Example:**

  ```css
  h1 {
    color: tomato;
  }
  ```

---

# CSS Colors: Hexadecimal Notation

- **What Is Hexadecimal Notation?**
  - Hex codes represent colors using a six-digit code (e.g., `#RRGGBB`), where `RR`, `GG`, and `BB` stand for red, green, and blue values.
  - Each pair ranges from `00` to `FF`, with `00` being no color and `FF` being full color.

- **Examples of Hex Codes:**
  - Black: `#000000`
  - White: `#FFFFFF`
  - Red: `#FF0000`
  - Example with shorthand: `#F00` (same as `#FF0000`)

- **Usage Example:**

  ```css
  div {
    background-color: #3498db;
  }
  ```

---

# CSS Colors: RGB and RGBA

- **What Are RGB and RGBA?**
  - RGB stands for Red, Green, Blue. Colors are specified with values between 0 and 255 for each component.
  - RGBA adds an alpha channel for transparency, ranging from 0 (fully transparent) to 1 (fully opaque).

- **Syntax and Examples:**
  - RGB: `rgb(255, 0, 0)` (red)
  - RGBA: `rgba(255, 0, 0, 0.5)` (semi-transparent red)

- **Usage Example:**

  ```css
  .overlay {
    background-color: rgba(0, 0, 0, 0.7);
  }
  ```

---

# CSS Colors: HSL and HSLA

- **What Are HSL and HSLA?**
  - HSL stands for Hue, Saturation, Lightness. Hue is given as a degree (0–360), Saturation and Lightness are percentages.
  - HSLA adds an alpha channel for transparency, similar to RGBA.

- **Syntax and Examples:**
  - HSL: `hsl(240, 100%, 50%)` (blue)
  - HSLA: `hsla(240, 100%, 50%, 0.3)` (semi-transparent blue)

- **Usage Example:**

  ```css
  .highlight {
    color: hsl(120, 60%, 70%);
  }
  ```

---

# CSS Colors: Advanced Techniques

- **Opacity and Transparency**
  - Use `opacity` to set transparency for an entire element. Ranges from 0 (transparent) to 1 (opaque).
  - RGBA/HSLA for specific color transparency.

- **CSS Gradients**
  - Create transitions between multiple colors.
  - **Linear Gradient**: `background: linear-gradient(to right, red, yellow);`
  - **Radial Gradient**: `background: radial-gradient(circle, red, yellow, blue);`

---

# CSS Colors: Advanced Techniques 2

- **Blend Modes and Filters**
  - **Mix-Blend-Mode**: Blends an element with the background (e.g., `multiply`, `screen`).
  - **Filter**: Applies effects like `grayscale()`, `sepia()`, `brightness()`.

- **Example:**

  ```css
  .blend {
    background: url('image.jpg');
    mix-blend-mode: overlay;
  }
  ```

---

# CSS Selectors recap

- Universal, type, class, ID, attribute, pseudo-classes, pseudo-elements
- Practical examples of each selector type

---

# Advanced CSS Selectors

- Attribute selectors with operators: `[attr=value]`, `[attr^=value]`, `[attr$=value]`
- Example: `[href^="https"] { color: green; }`

---

# Pseudo-Classes in Depth

- Understanding `:nth-child`, `:not`, `:nth-of-type`
- Example use cases for styling lists and tables

---

# Pseudo-Elements in Depth

- Using `::before`, `::after`, `::first-line`, `::first-letter`
- Styling with content insertion and decorative elements

---

# Cascading and Inheritance

- How CSS prioritizes rules: specificity, importance, source order
- Understanding inheritance and default browser styles

---

# CSS Variables (Custom Properties)

- Defining, using, and manipulating custom properties
- Example: `--primary-color: #3498db;`

---

# CSS Units Explained

- Absolute vs. relative units: px, em, rem, vh, vw, %
- Choosing appropriate units for responsive design

---

# Color Management in CSS

- Color models: HEX, RGB, RGBA, HSL, HSLA
- Using opacity with RGBA and HSLA

---

# Typography and Font Styling

- Font properties: `font-family`, `font-size`, `font-weight`, `font-style`
- Example with web-safe fonts and custom fonts

---

# Text Effects

- Applying `text-shadow`, `letter-spacing`, `word-spacing`, `text-transform`
- Example: Creating embossed or shadowed text effects

---

# Backgrounds and Gradients

- Background properties: color, image, size, repeat, position, attachment
- Creating linear and radial gradients with examples

---

# Borders and Outline Styling

- Border properties: `border-radius`, `border-image`, `border-style`
- Differences between borders and outlines

---

# CSS Box Model in Detail

- Understanding content, padding, border, and margin in the box model
- Example of calculating box dimensions with `box-sizing`

---

# Flexbox Layout System

- Flex container and flex item properties
- Key properties: `flex-direction`, `justify-content`, `align-items`, `flex-wrap`

---

# Advanced Flexbox Techniques

- Creating complex layouts with nested flex containers
- Examples with `align-self`, `order`, and `flex-grow`

---

# CSS Grid Layout System

- Defining grid containers with `display: grid`
- Creating rows and columns with `grid-template-rows` and `grid-template-columns`

---

# Grid Areas and Nested Grids

- Using `grid-template-areas` to name and place grid sections
- Example of nested grids for complex layouts

---

# Responsive Web Design with Media Queries

- Creating breakpoints with media queries
- Example: `@media (max-width: 768px) { ... }`

---

# Mobile-First Design Philosophy

- Benefits of starting with mobile styles and enhancing for larger screens
- Example media query adjustments for tablet and desktop

---

# CSS Transitions

- Transition properties: `transition-property`, `transition-duration`, `transition-timing-function`, `transition-delay`
- Example: Smoothly changing button colors on hover

---

# CSS Animations

- Defining animations with `@keyframes`
- Animation properties: `animation-name`, `animation-duration`, `animation-iteration-count`

---

# Advanced Animation Techniques

- Using `transform` and `animation` together for dynamic effects
- Example: Spinning icons and pulsing effects

---

# CSS Transformations

- Applying `translate`, `rotate`, `scale`, `skew`
- Example: Creating a 3D effect on hover

---

# CSS Filters and Effects

- Using `filter` for grayscale, blur, brightness, contrast
- Example: Creating a grayscale-to-color hover effect

---

# Using CSS to Create Shapes

- Simple shapes with borders, circles, and triangles
- Example: Creating a triangle with `border`

---

# CSS Clip Path for Advanced Shapes

- Using `clip-path` for complex shapes like polygons, circles, and custom paths
- Example: Cropping images with clip-path

---

# CSS Gradients and Patterns

- Creating repeating patterns with CSS gradients
- Example: Chevron patterns with linear-gradient

---

# CSS Masking

- Using `mask-image` and `mask-size` for custom image effects
- Example: Creating text cutouts and masked images

---

# CSS Blend Modes

- Using `mix-blend-mode` and `background-blend-mode` for color blending
- Example: Overlay effects with blend modes

---

# Flexbox vs. Grid: When to Use Each

- Comparing Flexbox and Grid use cases
- Examples of layouts best suited for each

---

# CSS Logical Properties

- Understanding `margin-inline`, `padding-block`, `border-start`
- Supporting languages with different writing directions

---

# Accessibility with CSS

- Using CSS for improved readability and accessibility
- Example: `focus` and `:hover` for keyboard navigation

---

# CSS Frameworks and Preprocessors

- Overview of popular CSS frameworks: Bootstrap, Tailwind, Bulma
- Introduction to preprocessors: Sass, LESS

---

# CSS Methodologies: BEM, OOCSS, SMACSS

- Overview of CSS naming conventions and organizational techniques
- Examples of BEM (Block, Element, Modifier) syntax

---

# CSS in JavaScript

- Inline styles vs. styled-components vs. CSS Modules
- Example of styling React components with CSS Modules

---

# CSS Grid Template Areas Example

- Using named grid areas for intuitive layout
- Example with headers, footers, and sidebars

---

# Fluid Typography and Responsive Units

- Using `calc()`, `min()`, and `max()` for responsive font sizes
- Example: `font-size: calc(1rem + 2vw);`

---

# Advanced Selectors: :is(), :where(), :has()

- Reducing specificity with `:is()` and `:where()`
- Using `:has()` for parent-child relationships (currently limited support)

---

# Print Stylesheets

- Creating styles for printed versions with `@media print`
- Example of removing navigation for print

---

# CSS Grid and Flexbox Together

- Combining Grid and Flexbox for hybrid layouts
- Example: Grid for the overall layout, Flexbox for individual sections

---

# CSS Resets and Normalization

- Differences between CSS resets and normalize.css
- Example of a basic CSS reset

---

# Future of CSS: Upcoming Features

- New and experimental CSS features like container queries, CSS Houdini
- Potential impact on web design

---

# Conclusion and Best Practices

- Summary of key CSS concepts
- Tips for writing maintainable and scalable CSS

---

# Q&A and Further Resources

- Open floor for questions
- Suggested resources for continued learning: MDN, CSS Tricks, CodePen
