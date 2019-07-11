export * from './components';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/Chat';

// ReactDOM.render(<App/>, document.getElementById('root'));

ReactDOM.render(
  React.createElement(App),
  document.getElementById('AppContainer')
);
