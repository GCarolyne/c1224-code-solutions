'use strict';
const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Bob' },
];
const products = [
  { id: 1, name: 'iPhone', price: 999 },
  { id: 2, name: 'Samsung Galaxy', price: 899 },
  { id: 3, name: 'Google Pixel', price: 799 },
];
const userResult = users.find(({ id }) => id === 2);
console.log('userResult', userResult);
const productResult = products.find((product) => product.price > 900);
console.log(productResult);
