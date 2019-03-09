import { handleMovement, handleShooting } from './spacecraft.js';
import { createEnemy } from './enemies.js';

export function handleStartGame() {
  $('#start-btn').click(() => {
    handleMovement();
    handleShooting();

    $('#welcome-message').fadeOut('slow');
    $('#start-btn').fadeOut('slow', handleWaves);
  });
}

let wave = 0;

function handleWaves() {
  createEnemy();
}
