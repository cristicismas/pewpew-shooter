import { KEYS } from './constants.js';

var keysPressed = {};

$(document).keydown(function(e) {
  keysPressed[e.keyCode] = true;
});

$(document).keyup(function(e) {
  delete keysPressed[e.keyCode];
});

const width = $(document).width();
const height = $(document).height();

export function moveShip() {
  setInterval(function() {
    const { left, top } = $('#space-craft').offset();

    for (var key in keysPressed) {
      if (!keysPressed.hasOwnProperty(key)) continue;
      if (!document.hasFocus()) continue;

      if (key == KEYS.leftKey || key == KEYS.A && left >= -40) {
        $('#space-craft').animate({ left: '-=10' }, 0);
      }
      if (key == KEYS.upKey || key == KEYS.W && top >= 0) {
        $('#space-craft').animate({ top: '-=10' }, 0);
      }
      if (key == KEYS.rightKey || key == KEYS.D && left < width - 90) {
        $('#space-craft').animate({ left: '+=10' }, 0);
      }
      if (key == KEYS.downKey || key == KEYS.S && top < height - 100) {
        $('#space-craft').animate({ top: '+=10' }, 0);
      }
    }
  }, 20);
}