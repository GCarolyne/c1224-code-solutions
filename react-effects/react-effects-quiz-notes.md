# react-effects-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- When is a component "mounted" to the DOM?
  A component is mounted when its first added to the DOM during intial render.
- What is a React Effect?
  An Effect is a mechanism to synchronize a component with external systems(like APIs, subscriptions, or DOM manipulations) by running code after render.
- When should you use an Effect and when should you not use an Effect?
  Use Effects for synchronization with external systems (network, subscriptions, .
  DOM) Dont use Effects for data transformations or handling user events - handle those during rendering or in event handlers.
- When do Effects run?
  Effects run after every render where their dependencies have changed. For initial mount, they run after the component first appears in the DOM.
- What function is used to declare an Effect?
  useEffect(() => {})
- What are Effect dependencies and how do you declare them?
  Dependencies are values from your component that the Effect relies on. Declare them in an array as the second argument to useEffect.
- Why would you want to clean up from an Effect?
  Cleanup prevents memory leaks and ensures proper disconnection from external systems(like unsubscribing from events or closing connections)
- How do you clean up from an Effect?
  Return a cleanp function from your effect
  useEffect(() => {
  Effect code
  return () => {
  cleanup code
  }
  })
- When does the cleanup function run?
  the Clean up runs before:
  Component unmount
  Before Effect re-runs due to dependency changes.
  Before the component re-renders if dependencies changed.

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
