import React, { Component } from 'react';
import { render } from 'react-dom';

import Cookies from 'js-cookie';


const RequireAuth = (Component) => {
  return class App extends Component {
    componentWillMount() {
      let token = Cookies.get('Token');
      console.log('Token',token);
    }
    render() {
      return <Component {...this.props} />
    }
  }
}

export { RequireAuth }
