var Asteroid = require('./asteroids')

function Game () {
  this.DIM_X = 500;
  this.DIM_Y = 500;
  this.NUM_ASTEROIDS = 10;
}


Game.prototype.addAsteroids = function () {
  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  for (let i = 0; i < this.NUM_ASTEROIDS; i++) {
    return new Asteroid([getRandomArbitrary(0, 500), getRandomArbitrary(0, 500)]);
  }
}

const game = new Game();
game.addAsteroids();

module.exports = Game;
