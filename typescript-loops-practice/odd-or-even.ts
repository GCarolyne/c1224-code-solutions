/* exported oddOrEven */
function oddOrEven(numbers: number[]): string[] {
  const result = [];
  for (const num of numbers) {
    if (num % 2 === 0) {
      result.push('even');
    } else {
      result.push('odd');
    }
  }
  return result;
}
