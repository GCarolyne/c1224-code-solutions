/* exported getValues */
function getValues(object: any): string[] {
  const getVal: string[] = [];
  for (const prop in object) {
    getVal.push(object[prop]);
  }
  return getVal;
}
