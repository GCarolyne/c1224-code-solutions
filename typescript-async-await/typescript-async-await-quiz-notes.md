# typescript-async-await-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:
What are the async and await keywords used for? They allow asynchronous programming in a style that appears synchronous, thus vastly improving readability.

How do async and await differ from Promise.then and Promise.catch?

They use promises but the syntax is different. Instead of promise.then you await the promise. that is execution appears to pause until the Promise resolves. Instead of Promise.catch

When do you use async?
I have to use async before any function.

When do you use await? When do you not use await? (What happens if you await a synchronous function?)
we use await when we want to wait for a promise to resolve before the function is executed.

How do you handle errors with await? We use the try catch method .. catch handles the errors.

What do try, catch and throw do? When do you use them?

try attempts to execute the code in the block . if the code fails it will skip the rest of the try block and sends us to the catch which catches the error.

What happens if you forget to use await on a Promise? In that case, what happens to the Promise rejection?
If I dont use await I dont know if the promise is resolved or error it is in a pending mode. promise rejection falls to the background because we did not wait to pause and wait for it to be resolved.

Which style of asynchronous programming do you prefer — callbacks, Promise.then, or async/await? Why? async and await is easier to work with ... it makes for amore intuitive and easier usage.

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
