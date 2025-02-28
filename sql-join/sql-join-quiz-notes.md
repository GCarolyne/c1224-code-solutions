# sql-join-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a foreign key?
  A foreign key is a column or set of columns in one table that refrences the primary key of another table. Foreign keys establish relationships between tables and maintain referential integrity in relational databases.
- How do you join two SQL tables? (Provide at least two syntaxes.)
  from and join using either on foreign key that will point to the many tables interconnected or multiple keys that will create join table using the using clause and specifing with the where clause. where we want to extract the specific row column from.
- How do you temporarily rename columns or tables in a SQL statement?
  Using the select clause to extract the original name pass a as clause and the updated name of the column we want.
- How do you create a one-to-many relationship between two tables?
  Provide foreign key in one table point to primary key in another table create one to many relationship between two tables. EXAMPLE supplier can provide many products.
- How do you create a many-to-many relationship between two tables?
  You must itroduce a third table that contains a foreign key to one of the tables and another foreign key to the other table. This is referred as a join table.

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
