# react-components-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a React component?
  A react component is a function responsible for rendering a part of the page which returns a JSX structured code that than gets translated to HTML.
- How do you define a component in React?
  With a function and capital letter for its name.
- How is a component "rendered" (made visible on the browser page)?
  React looks for a HTML element in your index.html file.
  The createRoot method creates a React root container in this element.
  When root.render() is called: React creates a virtual DOM representation of your component.
  Converts the JSX to real DOM elements.
  Injects these elements into the root container.
  Any stote or prop changes trigger re renders updating the dom

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
