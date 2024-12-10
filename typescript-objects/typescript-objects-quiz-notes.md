# typescript-objects-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are objects used for?

Objects are useful for:

1. Organizing data: objects allow us to group related data and functions together.
2. Reusability: Objects can be defined once and reused throughout your code, reducing redundancy.
3. Encapsulation: Objects can hide their internal state and require that interaction happen through methods providing a way to enforce specific behaviors.
4. Prototypal inheritance: JS uses prototypal inheritance which means that objects can inherit properties and methods from other objects.
5. Built in Objects: JS has several built in objects.

- What are object properties?

A property has a key ( known as 'name' or 'identifier') before the colon : and a value to the right of it.
We can remove and add and read files for our properties at any time. Property values are
accessible using the dot notation.
The value of these properties can be of any data type. boolean, number, string... etc.

- Describe object literal notation.

Declare a variable which will be the objects name = equal sign followed by curly brackets and below listed are the properties name and values assigned to those keys.

- How do you remove a property from an object?

When deleting the property from a object we must use the delete operator.

- What are the two ways to get or update the value of a property?

We can access these values by dot or bracket notation.

- What is the purpose of interfaces in TypeScript?

Interfaces in Typescript help us annotate our objects. The interface creates a shape for our actually objects - it must hold the same key value pairs as our real object.

- What are two different ways to describe the shape of an object in TypeScript?

By creating a INTERFACE and by giving the type of Interface to the actual JS object.

- How do optional properties in a TypeScript interface differ from mandatory properties, and why are they useful?

They allow the user to either fill in mandatory requirements or not. They are followed by a ?.
They are useful because they allow us to become more flexible with what our actual object does.

1. Flexibility : Allows us to create object with varying sets of properties, which is helpful when dealing with incomplete data or optional configurations.
2. Backward Compatibility: Adding optional properties doesnt break exisiting code, making it easier to extend interfaces.
3. Clarity and type safety: Optional properties clearly communicate which fields are not mandatory, reducing bugs compared to using plain JS objects.

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
