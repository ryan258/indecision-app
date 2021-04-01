'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

// we can just extend a child class instead of copy/pasting everything from Person (the parent class)


var Student = function (_Person) {
  _inherits(Student, _Person);

  // now we want to override the constructor function
  // - good news is that we don't have to redesignate defaults for inherited props
  function Student(name, age, major) {
    _classCallCheck(this, Student);

    var _this = _possibleConstructorReturn(this, (Student.__proto__ || Object.getPrototypeOf(Student)).call(this, name, age));
    // before we can do anything we have to call the parent constructor function by using super() which makes it the same as calling the parent class


    _this.major = major;
    return _this;
  }

  // now we can also add on additional methods


  _createClass(Student, [{
    key: 'hasMajor',
    value: function hasMajor() {
      // !! flips it from true to false and back to get a boolean value
      return !!this.major;
    }

    // we can also override methods that were inherited - we can completely change the behavior of this method

  }, {
    key: 'getDescription',
    value: function getDescription() {
      // super === calling the parent - so we get the return result back
      var description = _get(Student.prototype.__proto__ || Object.getPrototypeOf(Student.prototype), 'getDescription', this).call(this);

      if (this.hasMajor()) {
        description += ' Their major is ' + this.major;
      }

      return description;
    }
  }]);

  return Student;
}(Person);

var Traveler = function (_Person2) {
  _inherits(Traveler, _Person2);

  function Traveler(name, age, homeLocation) {
    _classCallCheck(this, Traveler);

    var _this2 = _possibleConstructorReturn(this, (Traveler.__proto__ || Object.getPrototypeOf(Traveler)).call(this, name, age));

    _this2.homeLocation = homeLocation;
    return _this2;
  }

  _createClass(Traveler, [{
    key: 'getGreeting',
    value: function getGreeting() {
      var greeting = _get(Traveler.prototype.__proto__ || Object.getPrototypeOf(Traveler.prototype), 'getGreeting', this).call(this);

      if (this.homeLocation) {
        greeting += ' I\'m visiting from ' + this.homeLocation;
      } else {
        return greeting;
      }

      return greeting;
    }
  }]);

  return Traveler;
}(Person);

var bufalo = new Traveler('Búfalo', 15, 'Minnesota');
console.log(bufalo);
console.log(bufalo.getGreeting());

// create a new instance
// const me = new Student('Ryan Johnson', 37, 'Global Studies')
// console.log(me)
// console.log(me.hasMajor())
// console.log(me.getDescription())
// console.log(me.getGreeting())

// const mrAnon = new Student()
var mrAnon = new Traveler(undefined, undefined, 'Sunny Nowhere');
console.log(mrAnon);
// console.log(mrAnon.hasMajor())
// console.log(mrAnon.getDescription())
console.log(mrAnon.getGreeting());
