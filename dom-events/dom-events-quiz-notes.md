# dom-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  For debugging purposes but also to find out what is happening in our code.
- What is the purpose of events and event handling?
  Event listeners are essential for creating interactive and dynamic web applications. When an event occurs javascript creates an event object that contains information about the event. This event object is passed as an argument to the event handler function.
- Are all possible parameters required to use a JavaScript method or function?
  No, there are required and optional parameters we can use.
- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  addEventListener
- What is a callback function?
  A callback function is a function that takes another function as an argument.
- What object is passed into an event listener callback when the event fires?
  When an event fires, an Event object is automatically passed into the callback function. This object contains information about the event that occured.
- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  It represents the properties of the event fired.
- What is the difference between these two snippets of code?
  ```js
  element.addEventListener('click', handleClick);
  ```
  Passes the handleclick function as a reference
  the function will execute when the click occurs.
  This is correct if you want the function to run on click.
  ```js
  element.addEventListener('click', handleClick());
  ```
  This is incorrect it calls the handleClick function without listening for the event.

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
