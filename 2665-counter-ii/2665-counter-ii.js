/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
  let num = init;
  var counter = {
    increment: function () {
        
      return ++num;
    },
    decrement: function () {
       
      return --num;
    },
    reset: function () {
        num = init;
      return num;
    },
  };

  return counter;
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */