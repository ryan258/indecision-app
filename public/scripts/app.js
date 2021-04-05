'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// babel src/playground/counter-example-w-state.js --out-file=public/scripts/app.js --presets=env,react --watch

//!!! Component state is essential for interactive applications.
var Counter = function (_React$Component) {
  _inherits(Counter, _React$Component);

  function Counter(props) {
    _classCallCheck(this, Counter);

    var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

    _this.handleAddOne = _this.handleAddOne.bind(_this);
    _this.handleMinusOne = _this.handleMinusOne.bind(_this);
    _this.handleReset = _this.handleReset.bind(_this);
    //! STEP 1: Come up with a default set of values
    _this.state = {
      // count: 0
      count: props.count
    };
    return _this;
  }

  //! STEP 3: The state changes based on some event.


  _createClass(Counter, [{
    key: 'handleAddOne',
    value: function handleAddOne() {
      this.setState(function (prevState) {
        // define updates you want to make
        return {
          count: prevState.count + 1
        };
      });
    }
  }, {
    key: 'handleMinusOne',
    value: function handleMinusOne() {
      this.setState(function (prevState) {
        return {
          count: prevState.count - 1
        };
      });
    }
  }, {
    key: 'handleReset',
    value: function handleReset() {
      // here you just don't need previous state
      this.setState(function () {
        return { count: 0 };
      });
      // obsolete syntax - the problem is when you're trying to update the state based on the current state values
      /*
      this.setState({
        count: 100
      })
      this.setState({
        count: this.state.count + 1
      })
      // the calls to setState are aSynchronous, they aren't guaranteed to happen/complete in order, so the 2nd set state won't catch the completion of the first setState
      */
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'Count: ',
          this.state.count
        ),
        React.createElement(
          'button',
          { onClick: this.handleAddOne },
          '+1'
        ),
        React.createElement(
          'button',
          { onClick: this.handleMinusOne },
          '-1'
        ),
        React.createElement(
          'button',
          { onClick: this.handleReset },
          'reset'
        )
      );
    }
  }]);

  return Counter;
}(React.Component);

Counter.defaultProps = {
  count: 42
};

ReactDOM.render(React.createElement(Counter, { count: -10 }), document.getElementById('app'));

//! STEP 1: Come up with a default set of values (default state object)
// when our component runs for the very first time, it will use these default values - it's just an object with a bunch of key/value pairs.

// const theState = {
//   count: 0
// }

//! STEP 2: The component is rendered with default state values
// note: We never call render manually, it happens behind the scenes

// so the initial render happens and now nothing will happen until the user interacts

//! STEP 3: The state changes based on some event. IE. They do something that changes the state that runs one of our methods
//- of course, YOU DO NOT CHANGE STATE DIRECTLY!
//!-USE this.setState(prevState => {return {new:object}}) - the is the prefererred way!
// - allows us to manipulate the object
// - and then allow React to handle things its way

// FAQ
// - you do not have to provide all the pieces of state when you're updating state with setState, just the pieces you're changing
// -

//! STEP 4: The application RERENDERS itself, bringing the UI back upto date with the state.

//! STEP 5: ^^ back to step 3 ^^
