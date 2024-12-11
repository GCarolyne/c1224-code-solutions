function convertMinutesToSeconds(minutes: number): number {
  const seconds: number = 60;
  return seconds * minutes;
}
convertMinutesToSeconds(6);

function greet(name: string): string {
  const sayHello: string = 'Hi there';
  return sayHello + ' ' + name;
}
greet('Carolyne');

const getArea = (width: number, height: number): number => width * height;

getArea(7, 9);

interface Person {
  firstName: string;
  lastName: string;
}
const sheCarolyne: Person = {
  firstName: 'Carolyne',
  lastName: 'Golias',
};

const getFirstName = (person: Person): string => person.firstName;

getFirstName(sheCarolyne);

const food: string[] = ['bananas', 'apples', 'oranges'];

const getLastElement = (array: string[]): string => {
  const lastElement: string = array[array.length - 1];
  return lastElement;
};
getLastElement(food);

function callOtherFunction(otherFunction: Function, params: unknown): any {
  return otherFunction(params);
}
callOtherFunction(getLastElement, food);
