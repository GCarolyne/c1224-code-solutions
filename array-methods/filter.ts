const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna',
];

const evenNum = numbers.filter((n) => n % 2 === 0);
console.log('filter even', evenNum);

const nameD = names.filter(() => !names.includes('D') && !names.includes('d'));
console.log('D', nameD);
