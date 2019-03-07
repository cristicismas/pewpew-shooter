import { moveShip } from './spacecraft.js';
import { renderBackground } from './background.js';
import { handleStartGame } from './game.js';

$(document).ready(() => {
  // Play background music.
  const bgMusic = document.getElementById('background-music');
  bgMusic.play();

  // Render background
  const canvas = document.getElementById('background');
  const ctx = canvas.getContext('2d');

  renderBackground(canvas, ctx);

  handleStartGame();

  moveShip(canvas);
});
