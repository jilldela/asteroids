Function.prototype.inherits = function(SuperClass) {
  function Surrogate() {};
  Surrogate.prototype = SuperClass.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this
}

Function.prototype.inherits2 = function(SuperClass) {
  this.prototype = Object.create(SuperClass.prototype);
  this.prototype.constructor = this;
}

function Animal(name) {
  this.name = name;
}
// Animal.prototype.name = "Greg";

function Cat(name) {
  Animal.call(this, name);
}

Cat.inherits2(Animal);

Cat.prototype.waddle = function () {
  console.log(this.name + " waddles!");
};


const ben = new Cat('ben')
//
ben.waddle();
console.log(ben.name);
console.log(ben.__proto__);
