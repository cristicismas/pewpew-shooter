import { KEYS, SHIP, ENEMY } from './constants.js';
import { enemyPosition, killEnemy } from './enemies.js';
import { drawLaser } from './laser.js';
import { detectCollision } from './collision.js'

var keysPressed = {};
var ship;

export var shipPosition = {
  left: $(document).width() / 2 - SHIP.WIDTH / 2,
  top: $(document).height() - 200
};

$(document).keydown(function(e) {
  keysPressed[e.keyCode] = true;
});

$(document).keyup(function(e) {
  delete keysPressed[e.keyCode];
});

$(window).on('resize', e => {
  // Using e.target works well for width but not for height.
  objectsLayer.width = e.target.outerWidth;
  objectsLayer.height = $(document).height();

  // Re-render ship using new document dimensions.
  shipPosition = getNewInitialShipPoisition();
  moveShip(ctx);
});

function getNewInitialShipPoisition() {
  return {
    left: objectsLayer.width / 2 - SHIP.WIDTH / 2,
    top: objectsLayer.height - 200
  }
}

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

      if (key == KEYS.LEFT || key == KEYS.A && left >= -40) {
        clearShip();
        shipPosition.left -= 10;
        moveShip(ctx);
      }
      if (key == KEYS.UP || key == KEYS.W && top >= 0) {
        clearShip();
        shipPosition.top -= 10;
        moveShip(ctx);
      }
      if (key == KEYS.RIGHT || key == KEYS.D && left < objectsLayer.width - 90) {
        clearShip();
        shipPosition.left += 10;
        moveShip(ctx);
      }
      if (key == KEYS.DOWN || key == KEYS.S && top < objectsLayer.height - 100) {
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
      
      if (key == KEYS.SPACE) {
        const verticalMiddle = SHIP.WIDTH / 2 - 2;
        const offsetLeft = left + verticalMiddle;
        let offsetTop = top;

        var drawInterval = setInterval(function() {
          const enemyHit = detectCollision(
            offsetTop,
            offsetLeft,
            enemyPosition.top,
            enemyPosition.left,
            ENEMY.E1.HEIGHT,
            ENEMY.E1.WIDTH
          );

          drawLaser(ctx, offsetLeft, offsetTop, killEnemy, enemyHit, drawInterval);

          // Render ship again (because clearing laser also clears part of the ship)
          moveShip(ctx);

          offsetTop -= 10;
        }, SHIP.LASER_DRAWING_DELAY);
        offsetTop -= 10;
      }
    }
  }, SHIP.SHOOTING_DELAY);
}