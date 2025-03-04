# express-postgres-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of the `pg` NPM package?
  The pg package is a PostgreSQL client for Node.js that allows your JS applications to connect to and interact with PostgreSql databases.
  Its primary purpose is to provide an interface for: Establishing connections to Postgresql databases. Executing sql queries against those databases.Processing query results. Managing connection pools to optimize performance.
- How do you tell `pg` which database to connect to?
  you can specify which database to connect to using a connection string or a configuration object.
- How do you send SQL to PostgreSQL from your Express server?
  By using a asynchronous function?
- How do you access the rows that get returned from the SQL query?
  We search the object we got back from our await function and search that object for the rows property.
- What must you always remember to put around your asynchronous route handlers? Why?
  always wrap asynchronous route handlers in try catch blocks. Because unhandled promise rejections in async functions will crash your express server. Error handling ensures that client requests receive apporpriate responses even when errors occur.
- What is a SQL Injection Attack and how do you avoid it in `pg`?
  This can occur when untrusted user input is directly incorporated into sql queries.This can lead to attackers accessing unauthroized dta, modify data base contents, delete data, execute administrative operations. To prevent this we must use parameterized qeries instead of string concatenation.

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
