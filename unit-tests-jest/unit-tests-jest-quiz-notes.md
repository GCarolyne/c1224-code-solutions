# unit-tests-jest-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are unit tests?
  Unit tests are small, focused tests that verify individual components or "units" of code work correctly in isolation. They typically test a single function, method, or class to ensure it behaves as expected with various inputs.
- Why is it important to write unit tests?
  Catch bugs early: Identify issues before they reach production
  Document code behavior: Tests show how code is supposed to work
  Enable refactoring: Change implementation with confidence
  Support collaboration: Help team members understand code expectations
  Improve design: Testing often leads to more modular, decoupled code
  Prevent regressions: Ensure new changes don't break existing functionality
- What code should be tested with a unit test? What code is not well suited for unit tests?
  Good for unit testing:

Pure functions with clear inputs/outputs
Business logic and algorithms
Data transformation code
Utility functions
Class methods with defined behavior

Not well suited for unit tests:

Code with many external dependencies
UI components (better with integration/E2E tests)
Database interactions
Network requests
File system operations
Code with random behavior
Legacy code that wasn't designed to be testable

- What is Jest? What are some other popular JavaScript unit testing frameworks?
  Jest:

A complete JavaScript testing framework developed by Facebook
Includes built-in assertion library, mocking, code coverage
Zero configuration needed to start testing
Snapshot testing for UI components
Parallel test execution for speed

Other popular JavaScript testing frameworks:

Mocha: Flexible framework that works with various assertion libraries
Jasmine: Behavior-driven development framework with built-in assertions
AVA: Minimalist test runner focused on concurrency
Tape: Simple, minimal test harness
Vitest: Fast Vite-native testing framework (gaining popularity)

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
