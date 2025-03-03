# express-routes-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the conventional HTTP methods for each of the CRUD operations? Is the server required to implement the methods according to this convention?

The conventional HTTP methods for CRUD (Create, Read, Update, Delete) operations are:
Create: POST - Creates a new resource
Read: GET - Retrieves a resource or collection of resources
Update:
PUT - Replaces a resource entirely
PATCH - Updates a resource partially
Delete: DELETE - Removes a resource
following these conventions is highly recommended as it creates a predictable, standardized API that adheres to REST principles.

- What is Express middleware?

Express middleware are functions that have access to the request object, response object, and the next middleware function in the application's request-response cycle. Middleware functions can execute code, modify request and response objects, end the request-response cycle, or call the next middleware function.

- What is Express middleware useful for?

Request preprocessing: Body parsing, cookie handling, file uploads
Response modification: Compression, headers manipulation, content negotiation
Flow control: Conditional branching in the request pipeline
Modularization: Breaking complex request handling into smaller, manageable units
Code reuse: Applying common functionality across multiple routes
Security: Implementing various security measures (helmet, CSRF protection)

The beauty of middleware lies in its composability—you can chain multiple specialized middleware functions to create sophisticated request processing pipelines.

- How do you mount a middleware with an Express application?

By the use() method.

- Which objects does an Express application pass to your middleware to manage the request/response lifecycle of the server?
  REQUEST OBJECT(REQ) : Contains information about the http request, query parameters, url parameters, headers, body and cookies.
  RESPONSE OBJECT: used to formulate and send the http response. Provides methods like send(), json(), status(), render(), this allows contorlling what gets sent back to the client.
  NEXT FUNCTION: A function that when invoked passes control to the next middleware in the stack. Calling next() with an argument is interpreted as an error and will skip to error-handling middleware.
- How do you specify and retrieve route parameters?
  Route parameters are named URL segments used to capture values at specific positions in the URL. Route parameters are available in the req.params object, with property names matching the parameters names

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
