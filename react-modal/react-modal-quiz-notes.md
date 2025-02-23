# typescript-modal-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `<dialog>` element used for?
  For creating a modal event in react.
- How do you show and hide a modal dialog?
  By the built in functionality of showModal() or close()
- How do you manipulate child components in React? Why will that no work for the `<dialog>` element?
  In react we manipulate child components by passing props down to them and lifting state up when needed.
- How do you call the dialog element's functions in React?
  You call dialog element function sin react using refs. Create a ref with useref() attach it to the dialog element with ref= dialog ref or variable of your choice and then call methods via the current property.
- How can you render nested components or JSX elements in React?
  You render nested components in React by including them in a parent component's JSX or by passing them as children props. React components can contain other components, HTML elements, or fragments in their return statement, allowing for component composition and hierarchy.

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
