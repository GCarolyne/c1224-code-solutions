/* exported defaults */
function defaults(target: any, source: any): undefined {
  for (const prop in source) {
    if (!(prop in target)) {
      target[prop] = source[prop];
    }
  }
}
