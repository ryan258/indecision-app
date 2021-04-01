'use strict';

var data = {
  title: 'Visibility Toggle',
  showDetails: false
  // buttonActive: false
};

var toggleVisibility = function toggleVisibility() {
  data.showDetails = !data.showDetails;
  render();
};

var render = function render() {
  var jsx = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      data.title
    ),
    React.createElement(
      'button',
      { onClick: toggleVisibility },
      data.showDetails ? 'Hide Details' : 'Show Details'
    ),
    data.showDetails && React.createElement(
      'p',
      null,
      'Hey, you can see details now!'
    )
  );

  ReactDOM.render(jsx, document.getElementById('app'));
};

render();
