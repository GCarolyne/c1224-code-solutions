# typescript-view-swapping-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `event.target`?
  Is the actual DOM element that triggered the event. That was clicked on.etc
- What is the effect of setting an element to `display: none`?
  That it will become hidden , or that all of its styling will be lost.
- What does the `element.matches()` method take as an argument and what does it return?
  The element.matches() method takes a CSS selector string as a argument and returns a boolean ( true / false)
- How can you retrieve the value of an element's attribute?
  by the getAttribute method this method will get me the value from a data-view attribute in my html.
- At what steps of the solution would it be helpful to log things to the console?
  at any steps we need to check for the correct coditional statements for example seeing what value we are accessing on a new variable declared.
- If you were to add another tab and view to your HTML, but you didn't use event delegation, how would your TypeScript code be written instead?
  I would need to add a event listener on every individual tab.
- If you didn't use a loop to conditionally show or hide the views in the page, how would your TypeScript code be written instead?
  without using a loop we would have to manually add or remove the active class from each tab and hidden class from each view.

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
