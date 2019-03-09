import { KEYS, SHIP } from './constants.js';

var keysPressed = {};
var ship;

export const shipPosition = {
  left: $(document).width() / 2 - SHIP.WIDTH / 2,
  top: $(document).height() - 200
};

$(document).keydown(function(e) {
  keysPressed[e.keyCode] = true;
});

$(document).keyup(function(e) {
  delete keysPressed[e.keyCode];
});

$(window).on('resize', () => {
  objectsLayer.width = $(document).width();
  objectsLayer.height = $(document).height();

  moveShip(ctx);
});

const { objectsLayer, ctx } = handleCanvas();

function handleCanvas() {
  const objectsLayer = document.getElementById('game-objects');
  const ctx = objectsLayer.getContext('2d');

  objectsLayer.width = $(document).width();
  objectsLayer.height = $(document).height();

  initShip(ctx);

  return { objectsLayer, ctx };
}

function initShip(ctx) {
  ship = new Image();
  ship.src = './assets/spacecraft/spaceCraft1_N.png';
  ship.onload = function() {
    ctx.beginPath();
    ctx.drawImage(ship, shipPosition.left, shipPosition.top, SHIP.WIDTH, SHIP.HEIGHT);
  };
}

function moveShip(ctx) {
  ctx.beginPath();
  ctx.drawImage(ship, shipPosition.left, shipPosition.top, SHIP.WIDTH, SHIP.HEIGHT);
}

export function handleMovement() {
  setInterval(function() {
    const { left, top } = shipPosition;

    for (var key in keysPressed) {
      if (!keysPressed.hasOwnProperty(key)) continue;
      if (!document.hasFocus()) continue;

      if (key == KEYS.leftKey || key == KEYS.A && left >= -40) {
        clearShip();
        shipPosition.left -= 10;
        moveShip(ctx);
      }
      if (key == KEYS.upKey || key == KEYS.W && top >= 0) {
        clearShip();
        shipPosition.top -= 10;
        moveShip(ctx);
      }
      if (key == KEYS.rightKey || key == KEYS.D && left < objectsLayer.width - 90) {
        clearShip();
        shipPosition.left += 10;
        moveShip(ctx);
      }
      if (key == KEYS.downKey || key == KEYS.S && top < objectsLayer.height - 100) {
        clearShip();
        shipPosition.top += 10;
        moveShip(ctx);
      }
    }
  }, SHIP.MOVE_DELAY);
}

function clearShip() {
  const { left, top } = shipPosition;
  ctx.clearRect(left - 10, top, SHIP.WIDTH + 20, SHIP.HEIGHT);
}

export function handleShooting() {
  setInterval(function() {
    const { left, top } = shipPosition;

    for (var key in keysPressed) {
      if (!keysPressed.hasOwnProperty(key)) continue;
      if (!document.hasFocus()) continue;
      
      if (key == KEYS.space) {
        const verticalMiddle = SHIP.WIDTH / 2 - 2;
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

    // Clear last laser position.
    ctx.clearRect(leftOffset, lastTopOffset, 3, 20);
    
    // Clear all off-screen lasers.
    ctx.clearRect(0, objectsLayer.width, objectsLayer.width, 20);
    
    ctx.fillStyle = '#f5f5f5';
    ctx.rect(leftOffset, topOffset, 3, 20);
    ctx.fill();

    // Render ship again (because clearing laser also clears part of the ship)
    moveShip(ctx);

    topOffset -= 10;
  }, SHIP.LASER_DRAWING_DELAY);
}
