/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            sumArray,
            reverseString,
            getKeys,
            getValues
 */
function getNumbersToTen(): number[] {
  const numbers: number[] = [];
  let currentNumber: number = 1;
  while (currentNumber < 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}
getNumbersToTen();

function getEvenNumbersToTwenty(): number[] {
  const evenNumbers: number[] = [];
  let currentNumber: number = 2;
  while (currentNumber < 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}

function repeatWord(word: string, time: number): string {
  let count: number = 1;
  let repeated: string = '';
  while (count < time) {
    repeated += word;
    count++;
  }
  return repeated;
}

function logEachCharacter(str: string): undefined {
  for (let i = 0; i < str.length; i++) {
    console.log('logEachCharacter', str[i]);
  }
}

function doubleAll(numbers: number[]): number[] {
  const doubled: number[] = [];
  for (let i = 0; i < numbers.length; i++) {
    const result: number = numbers[i];
    const doubleResult: number = result * result;
    doubled.push(doubleResult);
  }

  return doubled;
}

function sumArray(numbers: number[]): number {
  let sum: number = 0;
  for (const result of numbers) {
    sum += result;
  }
  return sum;
}

function reverseString(str: string): string {
  let reversed: string = '';
  for (const result of str) {
    reversed = result + reversed;
  }
  return reversed;
}

function getKeys(obj: Record<string, unknown>): any {
  const keys: string[] = [];
  for (const key in obj) {
    keys.push(key);
  }
}

function getValues(obj: Record<string, unknown>): unknown[] {
  const values: any = [];
  for (const key in obj) {
    values.push(obj[key]);
  }
  return values;
}
