import { ENEMY, SHIP } from './constants.js';
import { shipPosition } from './spacecraft.js';

const { E1, E2, E3 } = ENEMY;

var enemy;

export const enemyPosition = {
  left: $(document).width() / 2 - E1.WIDTH / 2,
  top: 50
};

let isEnemyAlive = true;

const { objectsLayer, ctx } = createEnemy();

export function createEnemy() {
  const objectsLayer = document.getElementById('game-objects');
  const ctx = objectsLayer.getContext('2d');

  enemy = new Image();
  enemy.src = E1.URL;
  enemy.onload = function() {
    ctx.beginPath();
    ctx.drawImage(enemy, enemyPosition.left, enemyPosition.top, E1.WIDTH, E1.HEIGHT);

    handleEnemyMovement();
  };

  return { objectsLayer, ctx };
}

function handleEnemyMovement() {
  setInterval(function() {
    if (isEnemyAlive) {
      
      const enemyX = enemyPosition.left;
      const shipX = shipPosition.left;

      const shipIsLeft = enemyX > shipX + SHIP.WIDTH;
      const shipIsRight = shipX > enemyX;

      if (shipIsLeft) {
        clearEnemy();
        enemyPosition.left -= E1.SPEED;
        moveEnemy();
      } else if (shipIsRight) {
        clearEnemy();
        enemyPosition.left += E1.SPEED;
        moveEnemy();
      }
    } else {
      clearEnemy();
    }

  }, E1.MOVE_DELAY);
}

function clearEnemy() {
  const { left, top } = enemyPosition;
  ctx.clearRect(left - 2, top, E1.WIDTH + 4, E1.HEIGHT);
}

export function killEnemy() {
  isEnemyAlive = false;
}

function moveEnemy() {
  ctx.beginPath();
  ctx.drawImage(enemy, enemyPosition.left, enemyPosition.top, E1.WIDTH, E1.HEIGHT);
}
