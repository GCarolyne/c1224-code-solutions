/* exported countdown */
function countdown(num: number): number[] {
  const resultArray: number[] = [];
  for (let i = num; i >= 0; i--) {
    resultArray.push(i);
  }
  return resultArray;
}
