
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
