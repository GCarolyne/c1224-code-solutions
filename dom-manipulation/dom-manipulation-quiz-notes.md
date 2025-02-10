# dom-manipulation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `className` property of element objects?
  It affects the CSS styling and we use this property in JS to modify our html elements.
- How do you update the CSS class attribute of an element using JavaScript?
  className property setter so $variable.className
- What is the `textContent` property of element objects?
  It specifies the text in the element html object. The text Content property represents all the text content contained within an element and its descendants.
- How do you update the text within an element using JavaScript?
  $variable.textContent
- Is the `event` parameter of an event listener callback always useful?
  Yes it is the parameter that sets what type of event we are listening for.
- Would this assignment be simpler or more complicated if we didn't use a variable to keep track of the number of clicks?
  It would be more complicated.
- Why is storing information about a program in variables better than only storing it in the DOM?
  Performance, single source of truth when data lives in variables the DOM becomes a pure reflection of that data rather than being the source of it. Easier data processing. Testing. state management. And .

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
