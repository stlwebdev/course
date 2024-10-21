---
# Title slide
title: Introduction to CSS
description: 
theme: seriph
highlighter: shiki
---

# Web development

## lesson 9

Oct 27, 2024

---

# CSS Units: Introduction

- **What Are CSS Units?**
  - CSS units define the measurements for properties like width, height, margin, padding, and font-size.
  - There are two main types: **Absolute Units** and **Relative Units**.
  - Choosing the right unit affects responsiveness, accessibility, and user experience.

- **Types of CSS Units:**
  - **Absolute Units**: Fixed measurements (e.g., px, in).
  - **Relative Units**: Measurements relative to other elements or the viewport (e.g., %, em, vw).

---

# Absolute Units: Pixels (px)

- **What Are Pixels?**
  - Pixels (`px`) are the most common absolute unit, representing a single dot on the screen.
  - Not affected by parent elements, viewport, or user settings (e.g., zoom).

- **Use Cases:**
  - Precise control for small elements or fine details.
  - Fixed layouts where consistent size is essential.

- **Disadvantages:**
  - Less flexible and can impact responsiveness, especially on different devices or screen resolutions.

- **Example:**

  ```css
  .fixed-box {
    width: 300px;
    height: 150px;
  }
  ```

---

# Absolute Units: Points (pt), Inches (in), and Centimeters (cm)

- **Points (pt):**
  - Primarily used for print media; 1pt = 1/72 of an inch.
  - Common in print style sheets but rare in digital content.

- **Inches (in) and Centimeters (cm):**
  - Absolute physical units rarely used in web design due to varying screen sizes.
  - Ideal for physical measurements in print layouts.

- **Examples:**

  ```css
  .print {
    font-size: 12pt;
    width: 8.5in;
    height: 11in;
  }
  ```

---

# Relative Units: Percentages (%)

- **How Percentages Work:**
  - Percentages (`%`) are relative to the parent element's size.
  - Often used for responsive layouts, allowing elements to scale based on their container.

- **Use Cases:**
  - Defining widths, heights, and margins in fluid layouts.
  - Responsive typography and containers.

- **Example:**

  ```css
  .responsive-box {
    width: 50%;
    height: 30%;
  }
  ```

  - **Caution:**: Ensure parent elements have a defined size, as percentages depend on them.

---

# Relative Units: em and rem

- **What Are em and rem?**
  - `em`: Relative to the font-size of the nearest parent.
  - `rem`: Relative to the font-size of the root element (`html`), unaffected by other parent elements.

- **Use Cases:**
  - `em`: Adaptive spacing and responsive typography.
  - `rem`: Consistent sizing across components while respecting global scaling.

- **Example:**

  ```css
  .text {
    font-size: 2em; /* 2x parent font-size */
  }
  .text-large {
    font-size: 1.5rem; /* 1.5x root font-size */
  }
  ```

---

# Viewport Units: vw, vh, vmin, vmax

- **Viewport Units Overview:**
  - `vw`: Viewport width (1vw = 1% of the viewport width).
  - `vh`: Viewport height (1vh = 1% of the viewport height).
  - `vmin` and `vmax`: Minimum and maximum of `vw` and `vh`.

- **Use Cases:**
  - Full-width or full-height elements, especially in responsive designs.
  - Dynamic scaling for elements based on viewport size.

- **Example:**

  ```css
  .full-screen {
    width: 100vw;
    height: 100vh;
  }
  ```

---

# Relative Units: ex, ch

- **Understanding ex and ch:**
  - `ex`: Relative to the x-height (height of lowercase "x") of the font. Useful for text-specific scaling.
  - `ch`: Width of the "0" character. Useful for creating character-based widths.

- **Use Cases:**
  - Designing with typography in mind.
  - Creating elements that scale based on text characteristics.

- **Example:**

  ```css
  .text-box {
    width: 30ch; /* Suitable for limiting characters */
  }
  ```

---

# Advanced Units: calc() Function

- **What is calc()?**
  - `calc()` allows for complex calculations involving different units (e.g., `px`, `em`, `%`).
  - Useful for creating adaptive layouts without hardcoding values.

- **Syntax and Use Cases:**
  - Syntax: `calc(expression)`
  - Combines relative and absolute units for custom layouts, margins, and padding.

- **Example:**

  ```css
  .dynamic-width {
    width: calc(100% - 50px);
  }
  ```

  - Requires spaces around operators (+, -, *, /).
  - May not be supported by very old browsers, though widely accepted in modern ones.

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
