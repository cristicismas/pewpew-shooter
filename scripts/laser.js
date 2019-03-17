export function drawLaser(ctx, x, y, killEnemy, enemyHit, drawInterval) {
  let laserAlive = true;

  if (enemyHit) {
    ctx.beginPath();

    // Kill enemy
    killEnemy();

    // Clear laser
    ctx.clearRect(x, y + 10, 3, 20);
    laserAlive = false;
    clearInterval(drawInterval);
  } else if (laserAlive) {
    ctx.beginPath();

    const lastTopOffset = y + 10;

    // Clear last laser position.
    ctx.clearRect(x, lastTopOffset, 3, 20);

    // Clear all off-screen lasers.
    if (y < -80) {
      ctx.clearRect(0, -100, $(document).width(), 30);
      laserAlive = false;
    }

    ctx.fillStyle = "#f5f5f5";
    ctx.rect(x, y, 3, 20);
    ctx.fill();
  } else {
    clearInterval(drawInterval);
  }
}
