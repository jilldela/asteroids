var Util = require("./utils")
var MovingObject = require("./moving_objects")


function Asteroid(pos) {
  const COLOR = "purple";
  const RADIUS = 25;
  function randomVec (length) {
    const deg = 2 * Math.PI * Math.random();
    return Util.scale([Math.sin(deg), Math.cos(deg)], length);
  }
  let vel = randomVec(5)
  MovingObject.call(this, pos, vel, RADIUS, COLOR);
}

Util.inherits(Asteroid, MovingObject);

const asteroid = new Asteroid([50,50]);

module.exports = Asteroid;

window.Asteroid = Asteroid;
