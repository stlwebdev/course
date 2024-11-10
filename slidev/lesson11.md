---
# Title slide
title: Introduction to CSS
description: 
theme: seriph
highlighter: shiki
---

# Web development

## lesson 11

Nov 10, 2024

---

# CSS Flexbox Layout: Introduction
- **What Is Flexbox?**
  - CSS Flexbox (Flexible Box) Layout is a layout model that allows you to create complex, responsive layouts easily.
  - Designed for one-dimensional layouts (either in rows or columns).
  - Primary concepts include **flex containers** and **flex items**.
- **Advantages of Flexbox:**
  - Provides alignment and distribution control for elements.
  - Allows for dynamic resizing, reordering, and responsiveness.

---

# Flex Container Basics
- **Setting Up the Flex Container:**
  - Define a flex container by setting `display: flex;` on a parent element.
  - Flex items are the direct children of this container.
  - Example:
    ```css
    .container {
      display: flex;
    }
    ```
- **Flex Direction:**
  - `flex-direction` sets the main axis (default is `row`).
  - Common values: `row`, `row-reverse`, `column`, `column-reverse`.

---

# Flex Direction
- **Main and Cross Axes:**
  - `flex-direction` defines the main axis along which flex items are placed.
  - `row`: items align left-to-right.
  - `column`: items align top-to-bottom.
- **Example:**
  ```css
  .container {
    display: flex;
    flex-direction: row;
  }
  ```

---

# Flex Wrap

- **What Is Flex Wrap?**
  - `flex-wrap` allows flex items to wrap onto multiple lines if there isn’t enough space in the container.
  - Common values: `nowrap`, `wrap`, `wrap-reverse`.
- **Example:**

  ```css
  .container {
    display: flex;
    flex-wrap: wrap;
  }
  ```

---

# Justify Content

- **Align Items Along Main Axis:**
  - `justify-content` aligns flex items along the main axis.
  - Common values: `flex-start`, `flex-end`, `center`, `space-between`, `space-around`.
- **Example:**

  ```css
  .container {
    display: flex;
    justify-content: center;
  }
  ```

---

# Align Items

- **Align Items Along Cross Axis:**
  - `align-items` controls the alignment along the cross axis.
  - Common values: `stretch` (default), `flex-start`, `flex-end`, `center`, `baseline`.
- **Example:**

  ```css
  .container {
    display: flex;
    align-items: center;
  }
  ```

---

# Align Content

- **Align Multi-line Flex Items:**
  - `align-content` aligns multiple lines along the cross axis.
  - Only applicable if `flex-wrap` is used and items wrap onto multiple lines.
- **Values:** `stretch`, `center`, `flex-start`, `flex-end`, `space-between`, `space-around`.

---

# Flex Grow

- **What Is Flex Grow?**
  - `flex-grow` defines how much a flex item can grow relative to others.
  - Higher values cause an item to grow more compared to items with lower values.
- **Example:**

  ```css
  .item {
    flex-grow: 2;
  }
  ```

---

# Flex Shrink

- **What Is Flex Shrink?**
  - `flex-shrink` determines how much a flex item can shrink if space is limited.
  - Items with higher `flex-shrink` values will shrink more than others.
- **Example:**

  ```css
  .item {
    flex-shrink: 1;
  }
  ```

---

# Flex Basis

- **What Is Flex Basis?**
  - `flex-basis` sets the initial size of a flex item before any growing or shrinking.
  - Overrides `width` or `height` in flex layouts.
- **Example:**

  ```css
  .item {
    flex-basis: 200px;
  }
  ```

---

# Flex Shorthand Property

- **Using `flex` as Shorthand:**
  - The `flex` shorthand combines `flex-grow`, `flex-shrink`, and `flex-basis` in one property.
  - Example: `flex: 1 0 200px;`
- **Example:**

  ```css
  .item {
    flex: 1 1 auto;
  }
  ```

---

# Order

- **Control Item Order:**
  - `order` allows you to rearrange the visual order of flex items.
  - Lower values appear earlier; default is `0`.
- **Example:**

  ```css
  .item {
    order: 2;
  }
  ```

---

# Align Self

- **Override Alignment for Individual Items:**
  - `align-self` overrides `align-items` for individual flex items.
  - Values: `auto`, `flex-start`, `flex-end`, `center`, `baseline`, `stretch`.
- **Example:**

  ```css
  .item {
    align-self: center;
  }
  ```

---

# Nested Flex Containers

- **Using Flexbox Inside Flexbox:**
  - Flex items can themselves be flex containers, allowing complex layouts.
  - Example:

    ```css
    .outer {
      display: flex;
    }
    .inner {
      display: flex;
    }
    ```

---

# Responsive Flexbox Layouts

- **Using Media Queries:**
  - Combine Flexbox with media queries for responsive designs.
  - Example:

    ```css
    @media (max-width: 600px) {
      .container {
        flex-direction: column;
      }
    }
    ```

---

# Horizontal and Vertical Centering

- **Centering with Flexbox:**
  - Combine `justify-content: center` and `align-items: center` to center items.
- **Example:**

  ```css
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ```

---

# Practical Example 1: Navbar

- **Building a Flexbox Navbar:**
  - Flexbox simplifies alignment of nav items horizontally or vertically.
  - Example:

    ```css
    .navbar {
      display: flex;
      justify-content: space-between;
    }
    ```

---

# Practical Example 2: Card Layout

- **Using Flexbox for Card Layouts:**
  - Flexbox is ideal for evenly spacing cards and making them responsive.
  - Example:

    ```css
    .card-container {
      display: flex;
      flex-wrap: wrap;
    }
    .card {
      flex: 1 1 200px;
    }
    ```

---

# Practical Example 3: Sidebar Layout

- **Creating Sidebar Layouts with Flexbox:**
  - Flexbox allows you to build sidebars alongside main content areas.
  - Example:

    ```css
    .container {
      display: flex;
    }
    .sidebar {
      flex: 1;
    }
    .main-content {
      flex: 3;
    }
    ```

---

# Summary and Best Practices

- **Key Points:**
  - Understand `flex-direction`, `justify-content`, and `align-items`.
  - Use `flex-grow`, `flex-shrink`, and `flex-basis` to control item sizing.
  - Experiment with nesting flex containers for complex layouts.
- **Tips:**
  - Always test layouts on different screen sizes for responsiveness.
  - Use Flexbox in combination with other CSS layout models (e.g., Grid).
