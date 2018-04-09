import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';
import store from './store';


export class Application extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route path={'/'} component={App} />
        </Router>
      </Provider>
    );
  }
}

render(
  <Application />,
  window.document.getElementById('root')
);
