import { moveShip } from './spacecraft.js';
import { renderBackground } from './background.js';


$(document).ready(() => {
  // Play background music.
  const bgMusic = document.getElementById('background-music');
  bgMusic.play();

  // Render background
  const canvas = document.getElementById('background');
  const ctx = canvas.getContext('2d');

  renderBackground(canvas, ctx)

  // Render ship.
  $('#space-craft').prepend('<img src="./assets/spacecraft/spaceCraft1_N.png" />');

  $('#start-btn').click(() => {
    $('#welcome-message').hide();
    $('#start-btn').hide();
  });

  setInterval(function() {
    moveShip(canvas);
  }, 20);
});
