/* exported getAreaOfCircle */
function getAreaOfCircle(radius: number): number {
  const circleRadius: number = Math.PI * radius;
  return circleRadius * radius;
}
