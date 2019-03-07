import { KEYS } from './constants.js';

export function moveShip(canvas, keysPressed) {
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
    if (key == KEYS.rightKey || key == KEYS.D && left < canvas.width - 90) {
      $('#space-craft').animate({ left: '+=10' }, 0);
    }
    if (key == KEYS.downKey || key == KEYS.S && top < canvas.height - 100) {
      $('#space-craft').animate({ top: '+=10' }, 0);
    }
  }
}
