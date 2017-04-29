/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var Asteroid = __webpack_require__(1)

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


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var Util = __webpack_require__(3)
var MovingObject = __webpack_require__(2)


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


/***/ }),
/* 2 */
/***/ (function(module, exports) {


function MovingObject(pos, velocity, radius, color){
  this.pos = pos;
  this.velocity = velocity;
  this.radius = radius;
  this.color = color;
}

var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
window.ctx = ctx

MovingObject.prototype.draw = function(ctx) {
  console.log(this.pos);
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(
    this.pos[0],
    this.pos[1],
    this.radius,
    0,
    2 * Math.PI,
    false
  );
  ctx.stroke();
  ctx.fill();
}


MovingObject.prototype.move = function(ctx) {
  this.pos[0] += this.velocity[0];
  this.pos[1] += this.velocity[1];
  this.draw(ctx);
}

const mo = new MovingObject([60, 60], [10, 10], 50, "purple");
mo.draw(ctx);
for (let i = 0; i < 10; i++) {
  mo.move(ctx);
}

module.exports = MovingObject;


/***/ }),
/* 3 */
/***/ (function(module, exports) {



const Util = {
  inherits: function(childClass, ParentClass) {
      function Surrogate() {};
      Surrogate.prototype = ParentClass.prototype;
      childClass.prototype = new Surrogate();
      childClass.prototype.constructor = childClass;
  },

  scale: function(vec, m) {
    return [vec[0] * m, vec[1] * m];
  }
}


module.exports = Util;


/***/ })
/******/ ]);