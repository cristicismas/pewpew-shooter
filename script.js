const W = 87;
const A = 65;
const S = 83;
const D = 68;

const up = 38;
const left = 37;
const down = 40;
const right = 39;

$(document).ready(() => {
  // Play background music.
  const bgMusic = document.getElementById('background-music');
  bgMusic.play();

  // Render ship.
  $('#space-craft').prepend('<img src="./assets/spacecraft/spaceCraft1_N.png" />');

  // Listen for keypress
  $(document).keydown(function(e) {
    switch(e.keyCode) {
      case W:
      case up:
        console.log('up');
        break;
      case A:
      case left:
        console.log('left');
        break;
      case S:
      case down:
        console.log('down');
        break;
      case D:
      case right:
        console.log('right');
        break;
    }
  });
});

function startGame() {
  $('#welcome-message').hide();
  $('#start-btn').hide();
}
