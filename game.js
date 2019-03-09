import { handleMovement, handleShooting } from './spacecraft.js';

export function handleStartGame() {
  $('#start-btn').click(() => {
    handleMovement();
    handleShooting();

    $('#welcome-message').fadeOut('slow');
    $('#start-btn').fadeOut('slow');
  });
}