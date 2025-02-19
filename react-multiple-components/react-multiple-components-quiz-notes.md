# react-multiple-components-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the phases in the React design process?
  layout state and event . The determination of which parents element will affect the flow of the data to and through its children.
- How does data flow in React?
  Data flows down from parent to child components through props ("one-way data flow")
  Parents pass both data and functions as props to children
  State is managed in parent components
- How can children components modify state in their parents?
  Children cannot directly modify parent state
  Instead, parents pass callback functions as props to children
  Children call these functions to request state changes in the parent
  Example: <Button onClick={() => setParentState(newValue)} />
  This is exactly what we just implemented in the RotatingBanner where:

Parent passes handleIndicatorClick to Indicators component
Indicators calls this function when buttons are clicked
Parent's state updates, flowing new values back down through props

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
