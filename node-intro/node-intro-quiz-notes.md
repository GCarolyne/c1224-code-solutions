# node-intro-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the 3 components of a fullstack Web architecture?
  A frontend that the user interacts with (Website or Mobile app)
  A backend server that takes requests from the frontend and processes them.
  A database where the data is stored and used across all instances of the front end.
- What is Node.js and why is it useful?
  It is a Javascript runtime enviroment built on chromes V\* javascript engine that allows you to run JS code outside of a web browser.It is designed to build scalable network applications , particularly server-side and command line applications.
  It is useful for:
  1. Non-block I/O: uses an event driven, asynchronous architecture that makes it efficient for I/O heavy applications.
     2.Same language everywhere: allows developers to use JS for both client and server side code. 3. Large ecosystem: npm Node Package Manager provides access to hundreds of thousands of reusable packages. 4. Crossplatform: Performance Versatility.
- What are environment variables and how do you access them in Node.js?
  Environment variables are key-value pairs external to your application that can influence its behavior without changing the code. They're commonly used for:

Configuration settings
API keys and secrets
Environment-specific behavior (development/staging/production)
Service connection details (database URLs, ports)

Before running your application in the terminal
In configuration files like .env (using packages like dotenv)
Through deployment platforms and containerization systems

- What is a REPL?

REPL stands for Read-Eval-Print Loop. It's an interactive programming environment that:

Reads user input
Evaluates the input (executes the code)
Prints the result
Loops back to read more input

Node.js comes with a built-in REPL that you can access by typing node in your terminal without any arguments. This provides an interactive environment where you can:

Test code snippets quickly
Experiment with JavaScript syntax
Debug code interactively
Access Node.js modules and APIs directly

The REPL is particularly useful for learning, testing small pieces of code, and experimenting without creating a full application file.

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
