const W = 87;
const A = 65;
const S = 83;
const D = 68;

const up = 38;
const left = 37;
const down = 40;
const right = 39;

const MAX_STARS = 250;

$(document).ready(() => {
  // Play background music.
  const bgMusic = document.getElementById('background-music');
  bgMusic.play();

  // Render background
  const canvas = document.getElementById('background');
  const ctx = canvas.getContext('2d');

  canvas.width = $(document).width();
  canvas.height = $(document).height();

  const stars = generateStars(canvas);

  $(window).on('resize', () => {
    populateBackground(ctx, stars);
  });

  populateBackground(ctx, stars);

  // Render ship.
  $('#space-craft').prepend('<img src="./assets/spacecraft/spaceCraft1_N.png" />');

  // Listen for keypress
  $(document).keydown(function(e) {
    switch (e.keyCode) {
      case W:
      case up:
        console.log('up');
        break;
      case A:
      case left:
        console.log('left');
        break;
      case S:
      case down:
        console.log('down');
        break;
      case D:
      case right:
        console.log('right');
        break;
    }
  });
});

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

function startGame() {
  $('#welcome-message').hide();
  $('#start-btn').hide();
}
