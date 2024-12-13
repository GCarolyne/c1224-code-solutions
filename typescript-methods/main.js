'use strict';
const heroes = ['Thor', 'Jupiter', 'Saturn', 'Mars'];
let randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
const randomIndex = Math.floor(randomNumber);
console.log('The random index is:', randomIndex);
const randomHero = heroes[randomIndex];
console.log('The random hero choosen is:', randomHero);
const library = [
  {
    title: 'New World Order',
    author: 'Aldous Huxley',
  },
  {
    title: 'Brave New World',
    author: 'Aldous Huxley',
  },
  {
    title: 'Doors of Perception',
    author: 'Aldous Huxley',
  },
];
const lastBook = library.pop();
console.log('The value of the last book is:', lastBook);
const firstBook = library.shift();
console.log('The value of the first book is:', firstBook);
const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('This is my library contents:', library);
const firstName = 'Carolyne';
const lastName = 'Golias';
const fullName = `${firstName} ${lastName}`;
const firstAndLastName = fullName.split(' ');
console.log('See what the split method did to my full name:', firstAndLastName);
const firstNames = firstAndLastName[0];
const sayMyName = firstNames.toUpperCase();
console.log('See the upper case method:', sayMyName);
const employee = {
  name: 'Mark Titan',
  age: '23',
  position: 'teacher',
};
const employeeKeys = Object.keys(employee);
console.log('employeeKeys', employeeKeys);
const employeeValues = Object.values(employee);
console.log('employeeValues', employeeValues);
const employeePairs = Object.entries(employee);
console.log('employeePairs', employeePairs);
