# react-context-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of React "context"?
  It is used for user management.It is to share global variables across many components.
- What values can be stored in context?
  any default values, any type of values belong in context.
  most often is a object.
- How do you create context and make it available to the components?
  Every time we create context we have a provider , the provider needs to be wrapped around the children that will have access to that value. We can control which part of the application has access to the provider.
- How do you access the context values?
  useContext hook returns the current value of the context values. Usually we return or destructure the values from what we need from the context.
- When would you use context? (in addition to the best answer: "rarely")
  Whenever we want to have data available globally. Primary use is for global data.
  Browser router is implemented using Context. Browser router has context embedded Context.

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
