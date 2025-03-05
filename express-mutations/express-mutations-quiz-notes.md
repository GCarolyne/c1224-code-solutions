# express-mutations-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the significance of an HTTP request's method?
  Indicate the action that the client wants the server to perform on a resource.
- What is the significance of an HTTP response's status?
  The response status codes indicate the outcome of the attempted HTTP request.
- What does the express.json() middleware do and when would you need it?
  It parses incoming request bodies with JSON payloads and makes the parsed data available on the req.body property.

  We need it when our api accepts json data in request bodies.
  When handling POST PUT Path requests with JSON payloads.
  When building APIs that communicate with frontend Javascript applications.

  Without this middleware, req.body would be undefined when clients send JSON data.

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
