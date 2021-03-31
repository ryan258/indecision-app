'use strict';

console.log('go fighting appjs');

// jsx - javascript xml
var template = React.createElement(
  'h1',
  null,
  'Indecision App'
);

// var template = /*#__PURE__*/ React.createElement('p', null, 'this is jsx from app.js')

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);

// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
