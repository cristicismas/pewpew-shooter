const W = 87;
const A = 65;
const S = 83;
const D = 68;

const upKey = 38;
const leftKey = 37;
const downKey = 40;
const rightKey = 39;

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

function startGame() {
  $('#welcome-message').hide();
  $('#start-btn').hide();
}

function moveShip(canvas, keysPressed) {
  const { left, top } = $('#space-craft').offset();

  for (var key in keysPressed) {
    if (!keysPressed.hasOwnProperty(key)) continue;
    if (!document.hasFocus()) continue;

    if (key == leftKey || (key == A && left >= -40)) {
      $('#space-craft').animate({ left: '-=10' }, 0);
    }
    if (key == upKey || (key == W && top >= 0)) {
      $('#space-craft').animate({ top: '-=10' }, 0);
    }
    if (key == rightKey || (key == D && left < canvas.width - 90)) {
      $('#space-craft').animate({ left: '+=10' }, 0);
    }
    if (key == downKey || (key == S && top < canvas.height - 100)) {
      $('#space-craft').animate({ top: '+=10' }, 0);
    }
  }
}
