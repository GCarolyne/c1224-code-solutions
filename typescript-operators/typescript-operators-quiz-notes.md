# typescript-operators-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
  && is the logical and operator returns the first falsy value it encounters or the last value if all are truthy
  || logical or operator returns the first truthy value it encounters, or the last value if all are falsy.

- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
  Short circuit evaluation means logical operators stop evaluating as soon as the result is determined. &&: returns first falsy value skips operand if first is falsy.
  ||: returns first truthy value, skips second operand if first is truthy.
- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
  The ?? operator returns the right operand only when the left is null or undefined, while || returns the right operand for any falsy value.
  ?? is better for preserving intentional falsy values while still handling null undefined.
- What is the `?:` (ternary) operator? How does it differ from `if/else`?
  ?: is a single line conditional expression that returns one of two values based on a condition. Ternary returns a value while if/else requires a variable.
- What is the `?.` (optional chaining) operator? When would you use it?
  I would use it to safely access nested object properties without throwing an error if an intermediate property is null or undefined.
  Use it when: accessing potentially undefined nested properties. Working with API responses where some fields might be missing. Calling methods that may not exist on an object.
- What is `...` (spread) syntax? How do you use it with arrays and objects?
  This expands elements from an iterable like arrays or enumberable properties from objects.
- What data types can be spread into an array? Into an object?
  arrays, strings, sets, maps(spreads key - value paris as arrays), nodelists and other array like objects , Generator objects, object spread: plain objects, arrays, maps, sets.
- How does spread syntax differ from rest syntax?
  spread syntax expands elements , while rest syntax collects them.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
