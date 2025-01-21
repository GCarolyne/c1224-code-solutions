# typescript-local-storage-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- How do you store data in `localStorage`?
  localStorage.setItem('key'.'value')
- How do you retrieve data from `localStorage`?
  localStorage.getItem('value')
- What data type can `localStorage` save in the browser?
  JSON string
- When is the safest time to store user data?
  Form Submissions

After validation is successful
When the server confirms the data was received/processed
After any client-side data processing is complete

Auto-saving Scenarios

After user finishes typing (with a debounce)
Before user navigates away from page
At regular intervals for backup purposes

User Actions

After completing a transaction
When updating preferences/settings
Upon logout to preserve state

State Changes

After successful API calls
When component state updates are confirmed
Before major UI transitions

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
