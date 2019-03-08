import { handleMovement, handleShooting } from './spacecraft.js';
import { renderBackground } from './background.js';
import { handleStartGame } from './game.js';

$(document).ready(() => {
  renderBackground();
  handleStartGame();
  handleMovement();
  handleShooting();
});
