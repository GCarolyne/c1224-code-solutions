# react-routing-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- How does the browser URL change when navigating through a Single Page App? How does a user expect the URL to change as they navigate through a browser app?

A traditional browser requests a document from a webserer downloads and evaluates css and js renders html sent from server. when user clicks , links starts process all over. The user wants to be able to navigate using the functionality of the browser which is the back arrow to go back and for example favorite star to save.

- What NPM package can be used to make navigating a React app behave as users expect?

the react router dom

- Which React Router component(s) can be used to set up your app's navigation?

the BrowserRouter that wraps the main app parent.

- How does React Router match the browser URL to one of your app's React components?
  React Router matches URLs against your defined route path. Matches are tried in order of appearance.
- What is the purpose of React Router's `Outlet` component?
  The outlet component acts as a placeholder for nested routes. Enables parent routes to wrap a child route with shared layouts.
- What React Router hook is used to access route path dynamic segments (those that start with `:` in the `path`)?
  If useParams is used it will match up the url and route paths for us. By using the id.

- What React Router hook is used to navigate programmatically?
  The useNavigate hook.

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
