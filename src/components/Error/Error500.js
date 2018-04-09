import React from 'react';

function Error500() {
  return (
    <div className="error-page" style={{marginTop: "0"}}>
      <h2 className="headline text-red"> 500</h2>
      <div className="error-content">
        <br />
        <h3><i className="fa fa-warning text-red"></i> Oops! Page not found.</h3>
        <p>
          We are working on fixing the issues right away.
          Please try after sometime and explore our website.
        </p>
      </div>
    </div>
  );
}

export default Error500;
