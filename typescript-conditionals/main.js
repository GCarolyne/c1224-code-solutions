'use strict';
/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */
function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}
function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
function startsWithJ(string) {
  if (string[0] === 'J') {
    return true;
  } else {
    return false;
  }
}
const adam = {
  name: 'Adam',
  age: '17',
};
console.log(adam);
function isOldEnoughToDrive(person) {
  if (person.age > 16) {
    return true;
  } else {
    return false;
  }
}
const women = {
  name: 'Elizabeth',
  age: 90,
};
const man = {
  name: 'Doug',
  age: 11,
};
function isOldEnoughToDrink(person) {
  if (person.age > 21) {
    return true;
  } else {
    return false;
  }
}
function isOldEnoughToDrinkAndDrive(person) {
  if (!person.age)
    if (person.age > 21) {
      return true;
    } else {
      return false;
    }
}
isOldEnoughToDrinkAndDrive(women);
isOldEnoughToDrinkAndDrive(man);
function categorizeAcidity(ph) {
  if (ph === 7) {
    return 'neutral';
  } else if (ph < 7 && ph <= 0) {
    return 'acid';
  } else if (ph > 7 && ph <= 14) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
}
function introduceWarnerBro(name) {
  switch (name) {
    case 'yakko':
      return 'we are the warner brothers!';
    case 'wakko':
      return 'We are the warner brothers';
    case 'dot':
      return 'Im cute';
    default:
      return 'Goodnight everybody!';
  }
}
function recommendMovie(genre) {
  switch (genre) {
    case 'action':
      return 'Die Hard';
    case 'comedy':
      return 'Step Brothers';
    case 'horror':
      return 'The Shining';
    case 'drama':
      return 'Forrest Gump';
    case 'musical':
      return 'The Sound Of Music';
    case 'sci -fi':
      return 'The Matrix';
    default:
      return 'Genre not recognized. Choose between action,comedy,horror,drama,musical, or sci-fi';
  }
}
