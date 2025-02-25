import { evenNumbers, toDollars, divideBy, multiplyBy } from './numbers';

describe('evenNumbers', () => {
  it('returns the even numbers', () => {
    const numbers = [1, 4, 5, 10, 0];
    const result = evenNumbers(numbers);
    expect(result).toEqual([4, 10, 0]);
  });
});

describe('toDollars', () => {
  it('converts amount to dollars', () => {
    const amount = 155;
    const result = toDollars(amount);
    expect(result).toBe('$155.00');
  });
});

describe('divideBy', () => {
  it('returns new array where every entry divided, does not modify original array', () => {
    const numbers = [122, 344, 5, 6, 7, 8];
    const divisor = 5;
    const originalArray = [...numbers];
    const result = divideBy(numbers, divisor);
    expect(result).toEqual(numbers.map((num) => num / divisor));
    expect(numbers).toEqual(originalArray);
  });
});

describe('multiplyBy', () => {
  it('modifies an object by multiplying the value of each key, only if it is a number', () => {
    const result = {
      name: 'Carolyne',
      age: 25,
    };
    const resultsObject = multiplyBy(result, 2);
    expect(resultsObject).toEqual({ name: 'Carolyne', age: 51 });
  });
});
