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
function isUnderFive(number: number): boolean {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}

function isEven(number: number): boolean {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function startsWithJ(string: string): boolean {
  if (string[0] === 'J') {
    return true;
  } else {
    return false;
  }
}

interface Person {
  name: string;
  age: number;
}

const adam = {
  name: 'Adam',
  age: '17',
};
console.log(adam);
function isOldEnoughToDrive(person: Person): boolean {
  if (person.age > 16) {
    return true;
  } else {
    return false;
  }
}

interface Person {
  name: string;
  age: number;
}

const women: Person = {
  name: 'Elizabeth',
  age: 90,
};

const man: Person = {
  name: 'Doug',
  age: 11,
};

function isOldEnoughToDrink(person: Person): boolean {
  if (person.age > 21) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrinkAndDrive(person: Person): any {
  if (!person.age)
    if (person.age > 21) {
      return true;
    } else {
      return false;
    }
}

isOldEnoughToDrinkAndDrive(women);
isOldEnoughToDrinkAndDrive(man);

function categorizeAcidity(ph: number): string {
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

function introduceWarnerBro(name: string): string {
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

function recommendMovie(genre: string): string {
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
