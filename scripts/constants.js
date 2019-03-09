export const KEYS = {
  W: 87,
  A: 65,
  S: 83,
  D: 68,
  UP: 38,
  LEFT: 37,
  DOWN: 40,
  RIGHT: 39,
  SPACE: 32
};

export const SHIP = {
  WIDTH: 127,
  HEIGHT: 82,
  // Milliseconds, lower is faster.
  MOVE_DELAY: 20,
  LASER_DRAWING_DELAY: 15,
  SHOOTING_DELAY: 300,
};

export const ENEMY = {
  E1: {
    URL: './assets/enemies/enemy-1.png',
    WIDTH: 35,
    HEIGHT: 50,
    MOVE_DELAY: 20,
    SPEED: 3
  },
  E2: {
    URL: './assets/enemies/enemy-2.png',
    WIDTH: 80,
    HEIGHT: 60,
    MOVE_DELAY: 25,
    SPEED: 3
  },
  E3: {
    URL: './assets/enemies/enemy-3.png',
    WIDTH: 100,
    HEIGHT: 80,
    MOVE_DELAY: 30,
    SPEED: 3
  }
}
