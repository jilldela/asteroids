

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
