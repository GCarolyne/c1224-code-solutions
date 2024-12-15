/* exported filterOutNulls */
function filterOutNulls(values: any[]): any[] {
  const arrayValue = [];
  for (const arr of values) {
    if (arr !== null) {
      arrayValue.push(arr);
    }
  }
  return arrayValue;
}
