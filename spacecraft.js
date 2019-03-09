import { KEYS, SHIP } from './constants.js';

var keysPressed = {};

$(document).keydown(function(e) {
  keysPressed[e.keyCode] = true;
});

$(document).keyup(function(e) {
  delete keysPressed[e.keyCode];
});

const { objectsLayer, ctx } = handleCanvas();

function handleCanvas() {
  const objectsLayer = document.getElementById('game-objects');
  const ctx = objectsLayer.getContext('2d');

  objectsLayer.width = $(document).width();
  objectsLayer.height = $(document).height();

  $(window).on('resize', () => {
    objectsLayer.width = $(document).width();
    objectsLayer.height = $(document).height();
  });

  return { objectsLayer, ctx };
}

export function handleMovement() {
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
      if (key == KEYS.rightKey || key == KEYS.D && left < objectsLayer.width - 90) {
        $('#space-craft').animate({ left: '+=10' }, 0);
      }
      if (key == KEYS.downKey || key == KEYS.S && top < objectsLayer.height - 100) {
        $('#space-craft').animate({ top: '+=10' }, 0);
      }
    }
  }, SHIP.MOVE_DELAY);
}

export function handleShooting() {
  setInterval(function() {
    const { left, top } = $('#space-craft').offset();

    for (var key in keysPressed) {
      if (key == KEYS.space) {
        const verticalMiddle = SHIP.WIDTH / 2;

        const offsetLeft = left + verticalMiddle;
        let offsetTop = top;
        
        drawLaser(offsetLeft, offsetTop);
        offsetTop -= 10;
      }
    }
  }, SHIP.SHOOTING_DELAY);
}

function drawLaser(x, y) {
  const leftOffset = x;
  let topOffset = y;

  setInterval(function() {
    ctx.beginPath();
    const lastTopOffset = topOffset + 10;

    // Without these it doesnt have enough y or x offset.
    const leftOffsetToClear = leftOffset - 2;
    const topOffsetToClear = lastTopOffset + 5;

    // Clear last laser position.
    ctx.clearRect(leftOffsetToClear, topOffsetToClear, 10, 20);
    
    // Clear all off-screen lasers.
    ctx.clearRect(0, objectsLayer.width, objectsLayer.width, 20)
    
    ctx.fillStyle = '#f5f5f5';
    ctx.rect(leftOffset, topOffset, 3, 20);
    ctx.fill();

    topOffset -= 10;
  }, SHIP.LASER_DRAWING_DELAY);
}