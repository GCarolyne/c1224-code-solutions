# css-cascade-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the four components of "the Cascade".
  Source Origin and Importance, Specificity, Position in the source code, Origin position
- What does the term "source order" mean with respect to CSS?
  It means that CSS will determine the importance of styling depending on the way the selectors are placed in order in the styles css sheet.
- How is it possible for the styles of an element to be applied to its children as well without an additional CSS rule?
  By applying them to their parent and relying on INHERITANCE.
- List the three selector types in order of increasing specificity.
  element, class, id, inline, !important added to any css property value overrides all the above levels of specificity.
- Why is using `!important` considered bad practice?
  It may disrupt the natural flow of the cascading styles making debugging and maintenance.

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
