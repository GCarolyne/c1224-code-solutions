# javascript-conditionals-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- In JavaScript, when is scope determined?
  When Javascript creates a function reference, it encloses the current variable scope into that function reference. This reference is referred to as a 'closure'.
- What allows JavaScript functions to "remember" variables from their surroundings?
  JavaScript use lexical scoping and closure mechanisms. A closure is formed when a function retains access to variables in it outer scope, even after the outer function has finished executing.
- What values does a closure contain?
  The function itself, References to all variables in itsouter scope.
- When is a closure created?

- How can you tell if a function will be created with a closure? A function will have a closure if its references any variables from its outer scope.

- In React, what is one important case where you need to know if a closure was created?
  The most common case is with useEffect dependencies. Closures in useEffect can lead to stale values if not handle properly.

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
