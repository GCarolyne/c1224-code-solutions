/* exported filterOutStrings */
function filterOutStrings(values: unknown[]): unknown[] {
  const filteredOut: any = [];
  for (const para of values) {
    if (typeof para !== 'string') {
      filteredOut.push(para);
    }
  }
  return filteredOut;
}
