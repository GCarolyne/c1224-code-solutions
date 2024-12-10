const width: number = 100;
const height: number = 300;
const area: number = width * height;
console.log('The area of this space is:', area);
console.log('The typeof', typeof area);

const bill: number = 50;
const payment: number = 100;
const change: number = payment - bill;
console.log('The result of change', change);
console.log('The typeof', typeof change);

const quizzes: number = 90;
const midterm: number = 80;
const final: number = 50;
const grade: number = quizzes + midterm + final / 3;
console.log('The average grade is', grade);
console.log('The typeof average', typeof grade);

const firstName: string = 'Howard';
const lastName: string = 'Hut';
const fullName: string = firstName + ' ' + lastName;
console.log('The name is', fullName);
console.log('The typeof name', typeof fullName);

const pH: number = 6;
const isAcidic: boolean = pH < 7;
console.log('Is the ph acidic', isAcidic);
console.log('What is the type', isAcidic);

const headCount: number = 220;
const isSparta: boolean = headCount === 300;
console.log('What is it Sparta', isSparta);
console.log('The typeof', typeof isSparta);

let motto: string = fullName;
motto += ' is the Goat';
console.log('Results:', motto);
console.log('It is a typeof', typeof motto);
