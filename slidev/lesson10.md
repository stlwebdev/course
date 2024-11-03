---
# Title slide
title: Introduction to CSS
description: 
theme: seriph
highlighter: shiki
---

# Web development

## lesson 10

Nov 3, 2024

---

# CSS Fonts: Basics
- **What Are CSS Fonts?**
  - Fonts define the appearance of text within a web page.
  - CSS provides various properties to control font family, size, weight, style, and more.
  - Choosing appropriate fonts is key for readability and design aesthetics.

- **Common Font Properties:**
  - `font-family`: Specifies the typeface (e.g., Arial, Georgia).
  - `font-size`: Defines text size.
  - `font-weight`: Sets font thickness (e.g., bold).
  - `font-style`: Specifies style (e.g., italic).

  ```css
  p {
    font-family: Arial, sans-serif;
    font-size: 16px;
  }
  ```

---

# Font Families and Fallbacks

- **What Is `font-family`?**
  - `font-family` sets the typeface for an element. Specify multiple fonts as fallbacks.
  - Fallback fonts are listed in case the preferred font is unavailable on the user’s device.

- **Syntax:**
  - A list of font names, separated by commas.
  - Last option is typically a **generic font family** (`serif`, `sans-serif`, `monospace`).


  ```css
  h1 {
    font-family: 'Helvetica Neue', Arial, sans-serif;
  }
  ```

- **Tip:**
  - Use quotes for multi-word font names (e.g., `'Times New Roman'`).
  - Generic font families help ensure readable fonts across devices.

---

# Font Size and Responsive Text

- **What Is `font-size`?**
  - `font-size` controls text size. Use units like `px`, `em`, `rem`, `%`, or viewport-based units (`vw`, `vh`).
  - Larger fonts enhance readability, while smaller fonts save space.

- **Responsive Font Sizing:**
  - Use relative units (`em`, `rem`) for scalable, responsive designs.
  - Viewport units like `vw` make fonts scale with screen size.


  ```css
  p {
    font-size: 1.2em; /* Scales with parent element */
  }
  .responsive {
    font-size: 3vw; /* Scales with viewport width */
  }
  ```

- **Tip:**
  - For consistency, use `rem` to maintain relative scaling across components, based on root font size.

---

# Font Weight and Style

- **What Is `font-weight`?**
  - `font-weight` adjusts the boldness of text.
  - Common values: `normal`, `bold`, `lighter`, `bolder`, or numeric values (100 to 900).

- **Font Style:**
  - `font-style` sets the text style to `normal`, `italic`, or `oblique`.


  ```css
  .bold-text {
    font-weight: bold;
  }
  .light-text {
    font-weight: 300;
  }
  .italic-text {
    font-style: italic;
  }
  ```

  - Numeric values for `font-weight` offer precise control, with lower numbers being lighter and higher numbers being bolder.

---

# Line Height and Letter Spacing

- **What Is `line-height`?**
  - `line-height` controls the vertical spacing between lines of text.
  - Can be a unitless number (relative to `font-size`), percentage, or length unit (e.g., `px`, `em`).

- **Letter Spacing:**
  - `letter-spacing` adjusts the space between characters. Can be positive (wider) or negative (narrower).
  - Useful for enhancing readability or creating design effects.


  ```css
  p {
    line-height: 1.5;
    letter-spacing: 0.1em;
  }
  ```

- **Tip:**
  - Setting a comfortable `line-height` (1.4–1.6) improves readability, especially for long paragraphs.

---

# Advanced Fonts: Google Fonts and Web Fonts

- **What Are Web Fonts?**
  - Web fonts are hosted fonts accessed over the web, providing more design flexibility.
  - Popular options include **Google Fonts** and **Adobe Fonts**.

- **Using Google Fonts:**
  - Go to [Google Fonts](https://fonts.google.com), select a font, and add the `<link>` to your HTML or import it in CSS.


  ```css
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  body {
    font-family: 'Roboto', sans-serif;
  }
  ```

- **Font Loading Optimization:**
  - Use the `font-display` property with values like `swap` or `optional` to improve loading speed.
  - Example: `font-display: swap;` (ensures text is visible during font load).

- **Tip:**
  - Web fonts enhance typography but can affect load times; optimize by only loading needed font weights and styles.
