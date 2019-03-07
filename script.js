import { moveShip } from './spacecraft.js';

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

  // Handle ship movement
  var keysPressed = {};

  $(document).keydown(function(e) {
    keysPressed[e.keyCode] = true;
  });

  $(document).keyup(function(e) {
    delete keysPressed[e.keyCode];
  });

  $('#start-btn').click(() => {
    $('#welcome-message').hide();
    $('#start-btn').hide();
  });

  setInterval(function() {
    moveShip(canvas, keysPressed);
  }, 20);
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
