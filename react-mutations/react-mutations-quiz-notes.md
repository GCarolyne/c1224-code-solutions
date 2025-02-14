# react-mutations-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- When does React re-render a component?
  the setter state function
- What are some ways to create a new, modified copy of an object?
  by using the spread syntax ... and creating a new array around it.
- What is a good way to immutably add a value to an array?
  // Spread operator to add at end
  const newArray = [...oldArray, newItem];

// Add at beginning
const newArray = [newItem, ...oldArray];

- What is a good way to immutably update a value in an array?
  const newArray = oldArray.map(item =>
  item.id === targetId ? updatedItem : item
  );
- What is a good way to immutably remove a value from an array?
  const newArray = oldArray.filter(item => item.id !== idToRemove);

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
