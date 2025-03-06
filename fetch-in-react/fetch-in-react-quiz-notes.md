# fetch-in-react-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What JavaScript function in the browser can be used in React to make HTTP requests to a server?
  the fetch() method is the most commonly used built in browswer function for making http requests. Another popular one is Acios.
- What two things need to be done to properly handle HTTP request errors? Why?
  Check the response status and try/catch blocks. This is necessary becasue fetch doesnt automatically reject on http error statuses.
- How can `useEffect` be used to load data for a component?
  Is is used to load data by declaring an asynchronous function within the effect that makes an API call and then updates component state with the result.
- How do you use `useEffect` to load component data just once when the component mounts?
  To load data only once when a component mounts, provide an empty dependency array as the second argument to useEffect. The empty array tells react that this effect doesnt depend on any values from props or state, so it only needs to run once after the initial render.
- How do you use `useEffect` to load component data every time the data key changes?
  To reload data whenever a specific value chagnes, include that value in the dependency array.
- In a large-scale production app, what are some better alternatives for loading and managing backend data?
  React Query: Provides caching, background updates, pagination, and optimistic UI updates. It reduces boilerplate and manages loading/error states automatically.
  RTK Query: Part of Redux Toolkit, it offers automatic caching, request deduplication, and tight integration with Redux state management.
  SWR (Stale-While-Revalidate): Created by Vercel, it focuses on real-time data with automatic revalidation and a simple API.
  Apollo Client: Specialized for GraphQL, it offers comprehensive state management, caching, and optimized data fetching.

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
