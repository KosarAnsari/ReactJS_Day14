App.jsx → Styling in React (Inline + External CSS)

App2.jsx → Lifecycle of a React Component

# React JS — Day 14

Today’s learning was focused on **two key concepts** in React JS:

---

## 1️⃣ Styling in React JS (`App.jsx`)

I explored **two approaches** to style React components:

### 🔹 Inline CSS
- Styles are added directly in JSX using `style={{}}`.
- Useful for quick, component-specific styling.

Example:
```jsx
<h3 style={{ color: 'red', backgroundColor: 'black' }}>Inline CSS</h3>

🔹 External CSS

Styles are placed in a .css file and imported into the component.

Great for reusable and maintainable styles.


Example:

import './App.css';

✨ Features Implemented

Theme toggle (Grey, Default, Black)

Grid layout toggle

Card components with images and text



---

2️⃣ Lifecycle of a React Component (App2.jsx)

React components have three main phases:

1. Mounting → Component is added to the DOM (e.g., fetching initial data)


2. Updating → Component re-renders when props/state change


3. Unmounting → Component is removed from the DOM (cleanup work)



🔹 Functional Component Lifecycle with useEffect

In App2.jsx, I:

Logged Mounting, Updating, and Unmounting phases

Used a count state to trigger updates

Added a toggle button to mount/unmount UI elements


Example:

useEffect(() => {
  console.log("Mounting / Updating Phase");

  return () => {
    console.log("Unmounting Phase");
  };
}, [count]);


---

📂 How to Run the Project

1. Clone the repository



git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

2. Install dependencies



npm install

3. Run Styling Demo (App.jsx as main)



npm start

4. Run Lifecycle Demo (App2.jsx as main)



Open main.jsx and change:


import App from './App2';

Then run:


npm start




🏷️ Topics Covered

Inline CSS Styling

External CSS Styling

Dynamic Themes

Grid Layout Toggle

React Component Lifecycle

useEffect Hook

Conditional Rendering



---

#ReactJS #JavaScript #FrontendDevelopment #100DaysOfCode #LearningInPublic

