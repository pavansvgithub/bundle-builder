# 🧩 Product Bundle Builder

This is a simple **Product Bundle Builder UI** built with HTML, CSS, and JavaScript. It allows users to select products and see a live-updating sidebar with pricing and progress feedback.

---

## 🚀 Features

### ✅ Base Requirements

- **Page loads with 6 products**, each showing:
  - Product image
  - Name
  - Price
  - “Add to Bundle” toggle button

- **Add to Bundle toggle**:
  - Changes to "Added ✓" when active
  - Can be clicked again to deselect

- **Sidebar** dynamically updates:
  - Shows thumbnail and name of selected products
  - Displays subtotal
  - Displays a progress bar indicating number of selected products (out of 3)

- **CTA Button ("Build Bundle")**:
  - Disabled until exactly **3 products** are selected
  - Becomes active when 3 products are in the bundle
  - On click, logs selected product bundle to the console

---

## 🌟 Optional Stretch Goals (if implemented)

- **Quantity Stepper** inside the sidebar for each product:
  - Allows user to increase/decrease quantity
  - Subtotal updates based on quantity

- **Animated Toggle State**:
  - Smooth transition/animation when switching between "Add to Bundle" and "Added ✓"

- **Deselecting/Removing** items directly from the sidebar

---

## 🧱 Tech Stack

- HTML for structure
- CSS for styling and layout (including Flexbox for aligning items like Discount/Subtotal)
- JavaScript for interactivity and state management

---

## 🧪 Demo Behavior

1. On page load:
   - 6 products displayed with "Add to Bundle" toggles
2. As user clicks:
   - Toggle state updates
   - Sidebar fills with selected items
   - Subtotal updates
   - Progress bar fills proportionally
3. When 3 items are selected:
   - "Build Bundle" button becomes clickable
4. On click:
   - Selected products are logged in the browser console

---


