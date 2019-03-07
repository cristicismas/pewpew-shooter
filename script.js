import { moveShip } from './spacecraft.js';
import { renderBackground } from './background.js';

$(document).ready(() => {
  // Play background music.
  const bgMusic = document.getElementById('background-music');
  bgMusic.play();

  // Render background
  const canvas = document.getElementById('background');
  const ctx = canvas.getContext('2d');

  renderBackground(canvas, ctx);

  $('#start-btn').click(() => {
    $('#welcome-message').hide();
    $('#start-btn').hide();
  });

  setInterval(function() {
    moveShip(canvas);
  }, 20);
});
