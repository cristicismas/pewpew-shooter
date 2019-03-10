import { handleMovement, handleShooting } from './spacecraft.js';

export var gameStared = false;

export function handleStartGame() {
  $('#start-btn').click(() => {
    handleMovement();
    handleShooting();

    $('#welcome-message').fadeOut('slow');
    $('#start-btn').fadeOut('slow', function() {
      gameStared = true;
    });
  });
}

