'use strict';
function convertMinutesToSeconds(minutes) {
  const seconds = 60;
  return seconds * minutes;
}
convertMinutesToSeconds(6);
function greet(name) {
  const sayHello = 'Hi there';
  return sayHello + ' ' + name;
}
greet('Carolyne');
const getArea = (width, height) => width * height;
getArea(7, 9);
const sheCarolyne = {
  firstName: 'Carolyne',
  lastName: 'Golias',
};
const getFirstName = (person) => person.firstName;
getFirstName(sheCarolyne);
const food = ['bananas', 'apples', 'oranges'];
const getLastElement = (array) => {
  const lastElement = array[array.length - 1];
  return lastElement;
};
getLastElement(food);
function callOtherFunction(otherFunction, params) {
  return otherFunction(params);
}
callOtherFunction(getLastElement, food);
