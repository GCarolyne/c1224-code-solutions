# react-intro-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are modules?
  They are folders that help us seperate our code when building a large application. For example to store components and farction our app into more organized code.
- What is the difference between named and default imports?
  Named imports and exports allow you to export multiple values from a module and import them specifically by name. They use curly braces in import statements. Default exports and imports all to expor t a single main value from a module. they dont use curly braces and you can import using any name you choose.
- What is the difference between named and default exports?
  A module can have multiple named exports and only one default export.
  Named exports need to be wrapped in an object.
  Default exports are commonly used for the main component in a file.
  Named exports are often used for utility components, hoooks, or when a file exports multiple related components. Named exports are better for tree shaking since bundlers can identify unused exports.
  When working in a team named exports can make code more maintainable as they enforce consistent naming access the codebase.

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
