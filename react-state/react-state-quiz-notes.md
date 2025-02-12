# react-state-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are _hooks_ in React?
  Hooks are special functions in React that start with "use" and allow function components to "hook into" React features. They let you use state, lifecycle methods, and other React features without writing a class component. Common hooks include useState, useEffect, and useContext.
- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))
  Only call hooks at the top level of your function component (not inside loops, conditions, or nested functions)
  Only call hooks from React function components or custom hooks (not regular JavaScript functions)
  These rules ensure that state is maintained correctly between renders and that hooks are called in the same order every time.
- What is the purpose of state in React?
  State provides a way to store and manage data that can change over time within a component. When state changes, React automatically re-renders the component to reflect those changes in the UI. State is essential for creating interactive applications that respond to user actions and data updates.
- Why can't we just maintain state in a local variable?
  Why not use local variables?
  Local variables don't persist between renders and don't trigger re-renders. When a component re-renders, all local variables are reset to their initial values. For example:
- What two actions happen when you call a `state setter` function?
  It updates the state value in React's internal memory
  It triggers a re-render of the component
- When does the local `state variable` get updated with the new value?
  The state variable gets updated after the current render completes. State updates are asynchronous - React batches multiple state updates together for performance. This means the new state value isn't immediately available after calling the setter function. You'll see the new value in the next render.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
