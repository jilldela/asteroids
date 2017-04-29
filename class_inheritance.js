class Animal {
  constructor() {

  }

  name() {
    return 'Greg';
  }
}

class Cat extends Animal {
  constructor() {
    super ();
  }

  cat() {
    return 'cat';
  }
}
//
let ben = new Cat();
console.log(ben.cat());
console.log(ben.name());
console.log(ben.__proto__);
