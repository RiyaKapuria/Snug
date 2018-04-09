import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

export class Error404 extends Component {
  render() {
    return (
      <div className="error-page" style={{marginTop: "0"}}>
        <h2 className="headline text-yellow"> 404</h2>
        <div className="error-content">
          <br />
          <h3><i className="fa fa-warning text-yellow"></i> Oops! Page not found.</h3>
          <p>
            We could not find the page you were looking for.
            Meanwhile, you may <Link to ='/'>return to&nbsp;
            {(Cookies.get('Token'))  ? "dashboard" : "signin" }</Link> .
          </p>
        </div>
      </div>
    );
  }
}
