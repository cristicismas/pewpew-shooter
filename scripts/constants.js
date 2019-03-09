export const KEYS = {
  W: 87,
  A: 65,
  S: 83,
  D: 68,
  upKey: 38,
  leftKey: 37,
  downKey: 40,
  rightKey: 39,
  space: 32
};

export const SHIP = {
  WIDTH: 127,
  HEIGHT: 82,
  // Milliseconds, lower is faster.
  MOVE_DELAY: 20,
  LASER_DRAWING_DELAY: 15,
  SHOOTING_DELAY: 100,
};

export const ENEMY = {
  E1: {
    WIDTH: 35,
    HEIGHT: 50,
    MOVE_DELAY: 20,
    SPEED: 3
  },
  E2: {
    WIDTH: 80,
    HEIGHT: 60,
    MOVE_DELAY: 25,
    SPEED: 3
  },
  E3: {
    WIDTH: 100,
    HEIGHT: 80,
    MOVE_DELAY: 30,
    SPEED: 3
  }
}
