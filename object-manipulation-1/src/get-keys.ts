/* exported getKeys */
function getKeys(object: any): string[] {
  const keysArray: string[] = [];
  for (const prop in object) {
    keysArray.push(prop);
  }
  return keysArray;
}
