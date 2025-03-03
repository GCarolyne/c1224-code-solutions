# http-messages-recap-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a client?
  Clients initiate communication sessions with servers which await incoming requests. A client requests content or service from a server and may share its own content as part of the request.
- What is a server?
  The server provides a function or service to one or many clients, which initiate requests for such services. Whether a computer is a client, a server or both is determined by the nature of the application that requires the service functions. EXAMPLE: a single computer can run a web server and file server software at the same time to serve different data to clients making different kinds of requests.
- Which HTTP method does a browser issue to a web server when you visit a URL?
  When you visit a URL in a browser , it issues a GET method to the web server. This is the standard method used to retrieve data from a specified resource.
- What is on the first line of an HTTP **request** message?
  1.The HTTP method (GET,POST)

2. The request URI ( the path to resource)

3. The HTTP version.

- What is on the first line of an HTTP **response** message?
  The HTTP version, A status code, A reason phrase.
- What are HTTP headers?
  HTTP headers are name-value pairs that appear in both requests and response messages. They provide additional information about the request or response, or about the object sent in the message body. Headers are separated from each other by a carriage return and line feed, and the are separated from the message body by an empty line.
  Content - Type: text/html, User-Agent: Mozilla/5.0 Host: example.com, Accept-Language; en-Us
- Is a body required for a valid HTTP message?
  No not required. Many HTTP requests like GET requests dont contain a message body. The headers are separated from the optional body by a blank line.

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
