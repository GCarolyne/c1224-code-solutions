# css-positioning-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the **default** value for the `position` property of HTML elements?
  It is static.
- How does setting `position: relative` on an element affect document flow?
  It maintains its original space in the document flow while allowing you to offset it from that position. Other elements can behove as if teh element is still in it s original position its original space is preserved!
- How does setting `position: relative` on an element affect where it appears on the page?
  If we shift the element after we use position relative it will take up the space its orignally occupied an other elements wont flow into that space.
- How does setting `position: absolute` on an element affect document flow?
  The element no longer takes up space in the document - other elements will behave as if it doesn't exist and will flow into the space it previously occupied

- How does setting `position: absolute` on an element affect where it appears on the page?
  The element is positioned relative to its nearest positioned ancestor (an ancestor with position value of relative, absolute, fixed, or sticky). If no positioned ancestor exists, it positions relative to the initial containing block (usually the viewport)
- How do you constrain an absolutely positioned element to a containing block?
  Set position: relative (or absolute, fixed, sticky) on the parent element to make it the containing block
  Set position: absolute on the child element you want to constrain
- What are the four box offset properties?
  top,right, bottom,left

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
