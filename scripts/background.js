const MAX_STARS = 250;

function renderBackground() {
  // Play background music.
  const bgMusic = document.getElementById('background-music');
  bgMusic.play();

  // Render background
  const canvas = document.getElementById('background');
  const ctx = canvas.getContext('2d');

  canvas.width = $(document).width();
  canvas.height = $(document).height();

  let stars = generateStars(canvas);
  populateBackground(ctx, stars);

  $(window).on('resize', () => {
    canvas.width = $(document).width();
    canvas.height = $(document).height();
    
    stars = generateStars(canvas);
    populateBackground(ctx, stars);
  });
}

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

export { renderBackground };
