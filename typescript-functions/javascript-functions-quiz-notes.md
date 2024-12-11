# javascript-functions-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a function in JavaScript?
  A function allows us to pack up code for reuse.
  Give a name to a handful of code statements to make the code easier to read.
  This will help us to make code dynamic.

- Describe the parts of a function **definition**.

The function keyword is used to begin the creation of a new function.
A optional name.
A comma separated list of zero or more parameters, surrounded by ().
The start of a functions code block.
A optional return statement.
The end of a functions code block closing curly brace.

Only by defining a function the code will not run.

- Describe the parts of a function **call**.

Once defined a function is just another kind of object. Simply write the name of the function and ().

- When comparing them side-by-side, what are the differences between a function **call** and a function **definition**?

A function call actually initiates the code block in the definition to run. Rather than the definition is the one that we want to make most reusable and efficient for the future. A definition in a function is actually saying to us what the code will do for us when it receives its arguments that will correspond with the parameters.

- What is the difference between a **parameter** and an **argument**?

A parameter is a placeholder for what will actually get passed in as an argument into the function call.
A parameter is a variable whose value is not known until we call the function and pass an argument.
When the functions code block is run, the parameter will be holding the value of the argument.

- Why are function **parameters** useful?

They are useful because they act as placeholders for the actual value that will be passed in through our function call which are named arguments.

- What two effects does a `return` statement have on the behavior of a function?

The return statement causes the function to produce a value we can use in our program.
Prevents any more code in the functions code block from being run.

- What is the syntax for defining an arrow function?

const add = (num1, num2) => num1 + num2

- When an arrow function's body is not surrounded in curly braces (_concise body syntax_), what changes in its functionality?
  It has a implict return functionality built in to the => arrow function.

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
