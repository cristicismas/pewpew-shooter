const MAX_STARS = 250;

function generateStars(canvas) {
  const stars = [];

  for (let i = 0; i < MAX_STARS; i++) {
    const x = getRandomNumber(canvas.width);
    const y = getRandomNumber(canvas.height);
    const radius = getRandomNumber(2) + 1;

    stars.push({ x, y, radius });
  }

  return stars;
}

function populateBackground(ctx, stars) {
  for (let i = 0; i < stars.length; i++) {
    const { x, y, radius } = stars[i];
    drawCircle(ctx, x, y, radius);
  }
}

function drawCircle(ctx, x, y, radius) {
  ctx.beginPath();

  ctx.fillStyle = '#f5f5f5';
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.fill();
}

function getRandomNumber(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export { generateStars, populateBackground };
