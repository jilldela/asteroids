const sum = (...nums) => {
  let sum = 0;
  nums.forEach((num) => {
    sum += num;
  });
  return sum;
}

// console.log(sum(1,2,3,4));

Function.prototype.myBind = function(obj) {
  const original_args = Array.from(arguments).slice(1);
  const that = this;

  const bind = function() {
    const args = Array.from(arguments);
    const all_args = original_args.concat(args);

    that.apply(obj, all_args);
  }

  return bind;
}

Function.prototype.myBind2 = function(object, ...args) {

  const bind = (...args2) =>{
    const all_args = args.concat(args2)
    this.apply(object, all_args)
  }

  return bind;
}


class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person, arg) {
    console.log(`${this.name} says ${sound} to ${person} and ${arg}!`);
    return true;
  }
}
const markov = new Cat("Markov");
const breakfast = new Cat("Breakfast");

// console.log(markov.says("meow", "Ned"));
// console.log(markov.says.myBind2(breakfast, "meow", "Kush")("string"));

const curriedSum = (numArgs) => {
  const numbers = [];

  const _curriedSum = (num) => {
    numbers.push(num);
    if (numbers.length === numArgs) {
      return numbers.reduce( (acc, cur) => acc + cur, 0);
    } else {
      return _curriedSum;
    }
  }
  return _curriedSum;
}

Function.prototype.curry = function(numArgs) {
  const args = [];

  const _curry = (arg) => {
    args.push(arg);
    if (args.length === numArgs) {
      console.log(this);
      return this.apply(null, args);
    } else {
      return _curry;
    }
  }
  return _curry;
}

const greeting = (name, message) => {
  return `${name} ${message}`;
}

console.log(greeting.curry(2)('eric')('hi'));
