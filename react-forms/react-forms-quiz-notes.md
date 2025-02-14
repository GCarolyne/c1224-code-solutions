# react-forms-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- How do controlled components differ from uncontrolled components?
  Controlled components have their state managed by React (form data handled by component state)
  Uncontrolled components maintain their own internal state (form data handled by DOM)
- What are some advantages of using uncontrolled components?
  Simpler code for basic forms
  Better performance (fewer re-renders)
  Good for simple form integrations
  Works well with legacy code/third-party libraries
- What are some advantages of using controlled components?
  Full control over form data and validation
  Immediate access to form values
  Better handling of dynamic inputs
  Easier to implement features like instant validation, disabling submit button, enforcing input formats
- Which style do you prefer?
  I prefered the controlled
- What two props must you pass to an input for it to be "controlled"?
  value (the current value)
  onChange (handler function)
- What are some popular npm packages for creating forms in React?
  Form Event
  Formik
  React Hook Form
  Final Form
  Yup (for validation, often used with Formik)

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
