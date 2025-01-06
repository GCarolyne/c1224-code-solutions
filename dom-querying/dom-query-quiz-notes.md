# dom-query-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  We log to the console for debugging purposes.
- What is a "model"?
  A model typically refers to a document or data structure that represents and manages data in a web application.
- Which "document" is being referred to in the phrase Document Object Model?
  It refers to the HTML the actualy webpage file that is loaded in the browser.
- What is the word "object" referring to in the phrase Document Object Model?
  Refers to the way each part of the HTML document is represented as a programming object. So 'object' emphasizes that each element isnt just markup anymore it is a full programming object that you can interact with through code.
- What is a DOM Tree?
  Every element is a node. Text within elements are text nodes. DOM tree is a hierarchical representation of an HTML document where each part of the document is represented as a node in a tree structure.
- Give two examples of `document` methods that retrieve a single element from the DOM.
  querySelector and getElementbyId
- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
  querySelectorAll

- Why might you want to assign the return value of a DOM query to a variable?
  Performance optimization - to hold for future reference without needing to query the dom again.
- What `console` method allows you to inspect the properties of a DOM element object?
  console.log
- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
  DOM loading DOM manipulation
- What does `document.querySelector()` take as its argument and what does it return?
  It takes a CSS selector as a string in its argument and returns the html element in a node form.
- What does `document.querySelectorAll()` take as its argument and what does it return?
  A CSS selector as a string and returns all matching elements from the html.

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
