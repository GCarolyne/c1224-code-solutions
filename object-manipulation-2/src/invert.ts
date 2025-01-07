/* exported invert */
function invert(source: any): any {
  const newObj: any = {};
  for (const prop in source) {
    const val = source[prop];
    newObj[val] = prop;
  }
  return newObj;
}
