'use strict';

// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

var app = {
  title: 'App title',
  subtitle: 'It even has a subtitle!',
  options: ['option 1', 'option 2', 'option 3']
};

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
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'one...'
    ),
    React.createElement(
      'li',
      null,
      'two'
    ),
    React.createElement(
      'li',
      null,
      'three'
    )
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
