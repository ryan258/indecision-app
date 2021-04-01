'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// babel src/playground/es6-classes-1.js --out-file=public/scripts/app.js --presets=env,react --watch

// the goal of classes is to reuse code - it's like a blue print that we can make instances from

var Person = function () {
  // where we define our class
  // vv constructor function is the function that gets called when you create a new instance and handles all the arguments passed in to that new instance
  //    Anon is a default param value if no name is passed when obj is instanciated
  function Person() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Anon';
    var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    _classCallCheck(this, Person);

    // regular function body
    // console.log('test')
    this.name = name; // 'this' refers to the class instance
    this.age = age;
  }

  // define another method


  _createClass(Person, [{
    key: 'getGreeting',
    value: function getGreeting() {
      // return 'Hi!'
      // - in methods we have access through 'this'
      // return 'Hi, I am ' + this.name + '!'
      return 'Hi, I\'m ' + this.name + '!';
    }
  }, {
    key: 'getDescription',
    value: function getDescription() {
      return this.name + ' is ' + this.age + ' year(s) old.';
    }
  }]);

  return Person;
}();

// create a new instance


var me = new Person('Ryan Johnson', 37);
console.log(me);
console.log(me.getGreeting());
console.log(me.getDescription());

var mrAnon = new Person();
console.log(mrAnon);
console.log(mrAnon.getGreeting());
console.log(mrAnon.getDescription());
