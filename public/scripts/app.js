'use strict';

// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
// end result @ indecision.mead.io
// - dom elements - https://reactjs.org/docs/dom-elements.html
// - synthetic events - https://reactjs.org/docs/events.html

var app = {
  title: 'App title',
  subtitle: 'It even has a subtitle!',
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  // console.log('form submitted')
  // elements contains a list of all the elements and are index by their name attribute
  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = ''; // clear the input field
    renderIndecisionApp();
  }
  console.log(app.options);
};

var onRemoveAll = function onRemoveAll() {
  if (app.options.length > 0) {
    app.options = [];
    renderIndecisionApp();
  }
};

var appRoot = document.getElementById('app');

var numbers = [55, 101, 1000];

var renderIndecisionApp = function renderIndecisionApp() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    app.subtitle && React.createElement(
      'p',
      null,
      app.subtitle
    ),
    React.createElement(
      'p',
      null,
      app.options.length > 0 ? 'Here are your options' : 'No options'
    ),
    React.createElement(
      'p',
      null,
      app.options.length
    ),
    app.options.length > 0 ? React.createElement(
      'button',
      { onClick: onRemoveAll },
      'Remove All'
    ) : '',
    React.createElement(
      'ol',
      null,
      app.options.map(function (option) {
        return React.createElement(
          'li',
          { key: option },
          option
        );
      })
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add Option'
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

renderIndecisionApp();
