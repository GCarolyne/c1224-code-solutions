# dom-event-delegation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `event.target`?
  It referes to the DOM element that triggered an event.
  We can access properties and values of the triggering element. Implement event delefation patterns efficiently. Handle form submissions and user interactions effectively.
- Why is it possible to listen for events on one element that actually happen its descendent elements?
  Because of event delegation when we set the eventTarget on a parent element all of its children can respond to this event.
- What DOM element property tells you what type of element it is?
  tagName
- What does the `element.closest()` method take as its argument and what does it return?
  It returns the closest child. It takes a valid css selector as a argument.
- How can you remove an element from the DOM?
  by the element name and the remove method.
- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
  by setting the eventlistener on its parent and working with event delegation.

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
