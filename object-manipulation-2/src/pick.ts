/* exported pick */
function pick(source: Record<string, unknown>, keys: string[]): any {
  const newObj: Record<string, unknown> = {};
  for (const key of keys) {
    if (source[key] !== undefined) {
      newObj[key] = source[key];
    }
  }
  return newObj;
}
