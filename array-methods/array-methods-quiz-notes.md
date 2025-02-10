# array-filter-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- `Array.forEach`:
  - What does `Array.forEach` do? It executes a provided function once for each array element.
  - What should the callback function do? This should execute the function on each element
  - What is `Array.forEach` useful for? It is useful when performing operations on each element of an array when you dont need to transform the array or return a new value.
- `Array.map`:
  - What does `Array.map` do? The map method creates a new array populated with the results of calling a provided function on every element in the calling array.
  - What should the callback function return? anew array with each element being the result of the callback function.
  - What is `Array.map` useful for? Is useful for transforming each element of an array into something new, creating a new array with the results.
- `Array.find`:
  - What does `Array.find` do? returns the first element in an array that satisfies a testing function. If no element passes the test, it returns undefined.
  - What should the callback function return? Should return a boolean value.
  - What is `Array.find` useful for? useful when you need to locate a specific item in an array, like finding a user by ID, locating the first occurrence of an element meeting certain criteria or searching for an object with specific properties.
- `Array.filter`:
  - What does `Array.filter` do? creates a new array containing all elements that pass a test through the provided function.
  - What should the callback function return? A boolean value.
  - What is `Array.filter` useful for? For removing unwanted elements based on certain conditions, like getting only active users, numbers about a threshold, or non empty strings.

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
