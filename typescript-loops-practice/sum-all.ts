/* exported sumAll */
function sumAll(numbers: number[]): number {
  let resultSum: number = 0;
  for (let i = 0; i < numbers.length; i++) {
    resultSum += numbers[i];
  }
  return resultSum;
}
