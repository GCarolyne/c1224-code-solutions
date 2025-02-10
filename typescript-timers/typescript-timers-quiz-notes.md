# typescript-timers-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a "callback" function?
  A callback function is a function that gets passed as an argument to another function and is executed later.
- Besides adding an event listener callback function to an element or the `document`, what is one way to delay the execution of a JavaScript function until some point in the future?

I can use setTimeout () function to delay a function execution by a specified number of miliseconds.

- How can you set up a function to be called repeatedly without using a loop?
  We can use setInterval() to repeatedly call a function at specified time intervals.

- What is the default time delay if you omit the `delay` parameter from `setTimeout()` or `setInterval()`?
  The default delay is 0 millliseconds if you omit the time parameter, though the actual execution will still be delayed slightly due to the JS event loop.

- What do `setTimeout()` and `setInterval()` return?
  The return a number ID a positive integer that can be used later to cancel the timeout/interval using clearTimeout() or clearInterval()

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
