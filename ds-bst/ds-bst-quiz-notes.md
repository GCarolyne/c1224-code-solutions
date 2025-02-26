# ds-bst-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Briefly describe the Binary Search Tree data structure.
  A tree where each node has at most 2 children
  For any node, all left subtree values < node's value < all right subtree values
- What are some examples of when you would use a Binary Search Tree?
  Implementing maps and sets
  Database indexing
  Auto-complete features
  Priority queues
- How do you determine if an element is in a Binary Search Tree? What is its time complexity?
  Start at root, compare target value with current node
  If equal, found it; if smaller, go left; if larger, go right
  Repeat until found or reach leaf
  Time complexity: O(h) where h is tree height (O(log n) if balanced, O(n) worst case)
- How do you add an element into a Binary Search Tree? What is its time complexity?
  Adding an element:

Follow same path as search
When you reach null, insert new node
Time complexity: O(h)

- How do you remove an element from a Binary Search Tree? What is its time complexity?
  Removing an element:

Find target node
If leaf: simply remove
If one child: replace with child
If two children: replace with in-order successor (smallest in right subtree)
Time complexity: O(h)

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
