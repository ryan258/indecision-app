'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// a react component can just be a new class

// Component is a class itself that gives us the features of React
// react components require that a special method -> render
// - and this returns all the JSX

// component STATE - allows our components to manage some data
// - when data in the component changes, that component will automatically rerender to reflect those changes
// - we don't want to keep running render() commands ourselves
// -- we can manipulate the data
// -- the component can worry about rerendering itself
// new props will cause children to rerender

var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    //! STEP 1.5: Bind the method we're passing down from here through props so it sets the proper context.
    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
    //! STEP 1.5: Bind the method we're passing down from here through props so it sets the proper context.
    _this.handlePick = _this.handlePick.bind(_this);
    _this.state = {
      title: 'Indecision App',
      subtitle: 'Put your life in the hands of a computer!',
      options: ['Orson', 'Manny', 'Ike']
      // options: ['Orson', 'Manny', 'Ike']
    };
    return _this;
  }
  // functions we'll pass down to child components so they can make changes up stream
  // - we can pass down functions to children from parents to affect things upstream
  //! STEP 1: Create the method we want to pass down to child component that will affect the parent state


  _createClass(IndecisionApp, [{
    key: 'handleDeleteOptions',
    value: function handleDeleteOptions() {
      this.setState(function () {
        return {
          options: []
        };
      });
    }

    //! STEP 1: Create the method we want to pass down to child component that will affect the parent state

  }, {
    key: 'handlePick',
    value: function handlePick() {
      var randomNum = Math.floor(Math.random() * this.state.options.length);
      var option = this.state.options[randomNum];
      alert(option);
    }
  }, {
    key: 'render',
    value: function render() {
      // const title = 'Indecision App'
      // const subtitle = 'Put your life in the hands of a computer!'
      // const options = ['Orson', 'Manny', 'Ike']

      return React.createElement(
        'div',
        null,
        React.createElement(Header, { title: this.state.title, subtitle: this.state.subtitle }),
        React.createElement(Action, {
          hasOptions: this.state.options.length > 0
          //! STEP 2: Create a new prop and set it to the method we want to pass down
          , handlePick: this.handlePick
        }),
        React.createElement(Options, {
          options: this.state.options
          //! STEP 2: Create a new prop and set it to the method we want to pass down
          , handleDeleteOptions: this.handleDeleteOptions
        }),
        React.createElement(AddOption, null)
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

var Header = function (_React$Component2) {
  _inherits(Header, _React$Component2);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          this.props.title
        ),
        React.createElement(
          'h2',
          null,
          this.props.subtitle
        )
      );
    }
  }]);

  return Header;
}(React.Component);

var Action = function (_React$Component3) {
  _inherits(Action, _React$Component3);

  function Action() {
    _classCallCheck(this, Action);

    return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
  }

  _createClass(Action, [{
    key: 'render',
    value: function render() {
      //! STEP 3: Use the method we're passing down through props
      return React.createElement(
        'div',
        null,
        React.createElement(
          'button',
          { onClick: this.props.handlePick, disabled: !this.props.hasOptions },
          'What should I do?'
        )
      );
    }
  }]);

  return Action;
}(React.Component);

var Options = function (_React$Component4) {
  _inherits(Options, _React$Component4);

  function Options() {
    _classCallCheck(this, Options);

    return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
  }

  _createClass(Options, [{
    key: 'render',
    value: function render() {
      var numberOfOptions = this.props.options.length;
      //! STEP 3: Use the method we're passing down through props
      return React.createElement(
        'div',
        null,
        React.createElement(
          'button',
          { onClick: this.props.handleDeleteOptions },
          'Remove All'
        ),
        this.props.options.map(function (option) {
          return React.createElement(Option, { key: option, optionText: option });
        })
      );
    }
  }]);

  return Options;
}(React.Component);

var Option = function (_React$Component5) {
  _inherits(Option, _React$Component5);

  function Option() {
    _classCallCheck(this, Option);

    return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
  }

  _createClass(Option, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        'Option: ',
        this.props.optionText
      );
    }
  }]);

  return Option;
}(React.Component);

var AddOption = function (_React$Component6) {
  _inherits(AddOption, _React$Component6);

  function AddOption() {
    _classCallCheck(this, AddOption);

    return _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).apply(this, arguments));
  }

  _createClass(AddOption, [{
    key: 'handleAddOption',
    value: function handleAddOption(e) {
      e.preventDefault();

      var option = e.target.elements.newOption.value.trim();

      if (option) {
        // app.options.push(option)
        alert(option);
        e.target.elements.newOption.value = '';
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'form',
        { onSubmit: this.handleAddOption },
        React.createElement('input', { type: 'text', name: 'newOption' }),
        React.createElement(
          'button',
          null,
          'Add Option'
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
