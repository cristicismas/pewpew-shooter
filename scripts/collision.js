export function detectCollision(
  firstTop,
  firstLeft,
  secondTop,
  secondLeft,
  height,
  width
) {
  return (
    firstTop >= secondTop &&
    firstTop <= secondTop + height &&
    firstLeft >= secondLeft &&
    firstLeft <= secondLeft + width
  );
}
