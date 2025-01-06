/* exported omit */
function omit(source: any, keys: string[]): any {
  const newObj: any = {};
  for (const prop in source) {
    let keep = true;
    for (const key of keys) {
      if (prop === key) {
        keep = false;
        break;
      }
    }
    if (keep) {
      newObj[prop] = source[prop];
    }
  }
  return newObj;
}
