import { renderBackground } from './background.js';
import { handleStartGame } from './game.js';

$(document).ready(() => {
  renderBackground();
  handleStartGame();
});
