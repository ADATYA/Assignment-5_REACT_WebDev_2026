<img width="902" height="442" alt="image" src="https://github.com/user-attachments/assets/929d3412-5f56-4a35-91dd-300b41db786c" />
<img width="903" height="437" alt="image" src="https://github.com/user-attachments/assets/f0eb550a-61c2-4722-9ad3-099123db9050" />

---
# 🚀 Dev Stack Builder

A simple and interactive **Dev Stack Builder** built with React.
Users can explore different web development technologies and add their favorite technologies to their own stack.

## 🌐 Live Project
** How to use <i>netlify</i> to deploy project show this video:
> https://assignment05phb142026.netlify.app/

## 📌 About The Project

**Dev Stack Builder** is a React-based web application where users can browse different technologies and build their own development stack.

The project focuses on practicing important React concepts such as **components, props, state, hooks, conditional rendering, and list rendering**.

## 🛠️ Technologies Used

* ⚛️ React
* 🟨 JavaScript
* 🎨 CSS
* ⚡ Vite
* 📦 npm
* 📄 JSON Data

## ✨ Features

### 1. 🔍 Explore Technologies

Users can view different technologies and their information in an organized way.

### 2. ➕ Build Your Own Stack

Users can add technologies to their personal stack and see the selected items.

### 3. 🗑️ Manage Your Stack

Users can remove technologies from their stack and update their selected technologies easily.

---

# 📚 React Questions & Answers

## 1. What is JSX, and why is it used in React?

**JSX** is a syntax that lets us write HTML-like code inside JavaScript.

It makes React components easier to write and understand because we can describe the UI directly inside our JavaScript code.

---

## 2. What is the difference between props and state?

**Props** are data passed from a parent component to a child component.

**State** is data managed inside a component that can change over time.

| Props              | State                        |
| ------------------ | ---------------------------- |
| Passed from parent | Managed by the component     |
| Usually read-only  | Can be updated               |
| Used to pass data  | Used to manage changing data |

---

## 3. What does the `useState` hook do, and where did you use it in this project?

`useState` allows a React component to store and update changing data.

In this project, I used `useState` to manage the **selected technologies / user's stack**.

For example:

```jsx
const [stack, setStack] = useState([]);
```

Here, `stack` stores the selected technologies and `setStack` updates it.

---

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to perform side effects in a React component.

I used `useEffect` to **load the technology data when the component starts**.

It helps make sure the JSON data is loaded when the application is ready.

Example:

```jsx
useEffect(() => {
  fetch("/data/technologies.json")
    .then(res => res.json())
    .then(data => setTechnologies(data));
}, []);
```

---

## 5. Why does every item in a `.map()` list need a unique `key` prop?

React needs a unique `key` to identify each item in a list.

It helps React understand **which item was added, removed, or changed**, so it can update the UI efficiently.

Example:

```jsx
{technologies.map(technology => (
  <TechnologyCard
    key={technology.id}
    technology={technology}
  />
))}
```

---

## 6. What is conditional rendering? Show one place you used it.

**Conditional rendering** means showing different UI depending on a condition.

I used it to show a message when the user's stack is empty.

Example:

```jsx
{stack.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  <StackSidebar stack={stack} />
)}
```

If there are no selected technologies, the empty stack message is displayed.

---

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component can send data to a child component using **props**.

For example:

```jsx
<YourStack
  stack={stack}
  setStack={setStack}
/>
```

Here, the parent sends `stack` and `setStack` to the child.

The child can then call the function received through props to send/update data in the parent.

```jsx
setStack(updatedStack);
```

So, the basic idea is:

**Parent → Child:** Props
**Child → Parent:** Callback function passed through props

---

# 👨‍💻 Author

**Bikrom Adatya Roy**
**bikromroy0711@gmail.com**

Built as part of my React learning journey and Assignment 5.

### 📝 Remark

1. **On the first day, I faced a lot of challenges while organizing my files and folders in VS Code.** Honestly, I was a little afraid to work on this project for the first time.

2. **But I feel lucky to be enrolled in the Next Level Program and the Durbar Group.** These experiences helped me redefine my mindset and taught me not to be afraid of bugs. Now, I see bugs as part of the learning process, and solving them has become my first priority.

3. **I learned a lot from the video lessons, the React Part 1 project from the Next Level Program, and the main sessions with Utsho Vai.** These resources helped me understand React concepts and gave me the confidence to work on this project.



