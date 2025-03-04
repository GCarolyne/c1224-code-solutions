# express-static-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of the Express Static middleware?
  This static middleware serves static files like HTML, CSS, Javascript, images, pdfs directly from a specified directory. It returns a middleware function that handles file serving automatically.
- What does `express.static()` return?
  It returns a function that handles the serving of static files followed by a specified public directory.
- What are several examples of static files?
  index.html, css, javascript, images
- What is a good way to serve application images using Express?
  create a dedicated directory for your images. Use the express.static function to serve these files. Mount the middleware to a specific path.

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
