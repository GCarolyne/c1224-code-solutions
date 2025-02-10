# typescript-promises-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the Event Queue model of Promises?
  Promises use an event queue to handle asynchronous operations. When a Promise is created, it's added to the queue and executes after all synchronous code completes. This ensures non-blocking behavior while maintaining execution order of async operations.
- What are the three states a Promise can be in?
  Pending: Initial state when Promise is created and hasn't completed
  Fulfilled: Operation completed successfully with a result value
  Rejected: Operation failed with an error reason
  Each Promise can only transition once from pending to either fulfilled or rejected.
- How do you handle the fulfillment of a Promise?
  Use .then() method to handle successful completion:
- How do you handle the rejection of a Promise?
  Use .catch() method to handle errors:.then()

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
