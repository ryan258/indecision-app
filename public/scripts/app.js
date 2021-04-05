'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

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

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
    _this.handlePick = _this.handlePick.bind(_this);
    //! STEP 1.5: Bind it
    _this.handleAddOption = _this.handleAddOption.bind(_this);
    _this.state = {
      title: 'Indecision App',
      subtitle: 'Put your life in the hands of a computer!',
      options: []
      // options: ['Orson', 'Manny', 'Ike']
    };
    return _this;
  }

  _createClass(IndecisionApp, [{
    key: 'handleDeleteOptions',
    value: function handleDeleteOptions() {
      this.setState(function () {
        return {
          options: []
        };
      });
    }
  }, {
    key: 'handlePick',
    value: function handlePick() {
      var randomNum = Math.floor(Math.random() * this.state.options.length);
      var option = this.state.options[randomNum];
      alert(option);
    }

    //! STEP 1: Create a method to pass down with an argument

  }, {
    key: 'handleAddOption',
    value: function handleAddOption(option) {
      //! STEP 6: Add conditional logic validation checks
      if (!option) {
        return 'Enter valid value to add item';
        // and this gets returned down to the AddOption component
      } else if (this.state.options.indexOf(option) > -1) {
        return 'Item already exists';
      }
      // console.log(option)
      //! STEP 5: Do something with the data that was passed up from the child component
      this.setState(function (prevState) {
        //! don't do this as it will mutate the array
        //! prevState.options.push(option)
        // we want to compute a new one w/ array.concat
        return {
          options: prevState.options.concat(option)
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      //! STEP 2: Pass it down
      return React.createElement(
        'div',
        null,
        React.createElement(Header, { subtitle: this.state.subtitle }),
        React.createElement(Action, { hasOptions: this.state.options.length > 0, handlePick: this.handlePick }),
        React.createElement(Options, { options: this.state.options, handleDeleteOptions: this.handleDeleteOptions }),
        React.createElement(AddOption, { handleAddOption: this.handleAddOption })
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

var Header = function Header(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      props.title
    ),
    props.subtitle && React.createElement(
      'h2',
      null,
      props.subtitle
    )
  );
};

// we can add on default prop values on class or functional components by taking on a property after we define the component
Header.defaultProps = {
  title: 'Indecision'
};

var Action = function Action(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      { onClick: props.handlePick, disabled: !props.hasOptions },
      'What should I do?'
    )
  );
};

var Options = function Options(props) {
  var numberOfOptions = props.options.length;
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      { onClick: props.handleDeleteOptions },
      'Remove All'
    ),
    props.options.map(function (option) {
      return React.createElement(Option, { key: option, optionText: option });
    })
  );
};

var Option = function Option(props) {
  return React.createElement(
    'div',
    null,
    'Option: ',
    props.optionText
  );
};

var AddOption = function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  //! STEP 4: constructor function to handle the right methods in the render
  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
    //! STEP 7: Add state to this component
    _this2.state = {
      error: undefined
    };
    return _this2;
  }
  // this handleAddOption that is built into the function that is just incharge of doing things when the form gets submitted


  _createClass(AddOption, [{
    key: 'handleAddOption',
    value: function handleAddOption(e) {
      e.preventDefault();

      var option = e.target.elements.newOption.value.trim();

      // validation handled up above
      /*if (option) {
        // app.options.push(option)
        //! STEP 3: Call the method being passed down by props and passing in an argument/data that will be passed in the parent component
        // this handleAddOption will get things applied to state in the parent
        this.props.handleAddOption(option)
        e.target.elements.newOption.value = ''
      }*/
      // this.props.handleAddOption(option)

      var error = this.props.handleAddOption(option);
      //! ENTER THE LAND OF COMPONENT STATE !//
      //! STEP 8: When submission has an error we want to update error state
      this.setState(function () {
        return {
          error: error
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      //! STEP 9: RENDER ERROR MESSAGE IF THERE IS ONE - if there is no error the method will return back undefined and no error message will appear
      return React.createElement(
        'div',
        null,
        this.state.error && React.createElement(
          'p',
          null,
          this.state.error
        ),
        React.createElement(
          'form',
          { onSubmit: this.handleAddOption },
          React.createElement('input', { type: 'text', name: 'newOption' }),
          React.createElement(
            'button',
            null,
            'Add Option'
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));

// Stateless components
// - don't have access to 'this'
// -- but passing props will be like this.props in class based components
// -- stateless components are faster than state/class based components
// -- easier to test
// --- (use them when you can)
/* const User = (props) => {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  )
}

ReactDOM.render(<User name="Manny" age={10} />, document.getElementById('app')) */
