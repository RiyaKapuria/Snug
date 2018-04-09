import React, { Component } from 'react';

class AppTheme extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  handleThemeChange(value) {
   this.props.onchangeTheme(value);
  }

  render() {
    return (
      <aside className="control-sidebar control-sidebar-dark">
        <h4 className="control-sidebar-heading">&emsp;Change Your Theme</h4>
        <ul className="list-unstyled clearfix">
          <li style={{float:"left", width: "33.33333%", padding: "5px"}} onClick={this.handleThemeChange.bind(this, "Purple")}>
            <a href="javascript:void(0)" data-skin="skin-purple" style={{display: "block", boxShadow: "0 0 3px rgba(0,0,0,0.4)"}} className="clearfix full-opacity-hover">
              <div>
                <span style={{display:"block", width: "20%", float: "left", height: "7px"}} className="bg-purple-active"></span>
                <span style={{display:"block", width: "80%", float: "left", height: "7px"}} className="bg-purple"></span>
              </div>
              <div>
                <span style={{display:"block", width: "20%", float: "left", height: "20px", background: "#222d32"}}></span>
                <span style={{display:"block", width: "80%", float: "left", height: "20px", background: "#f4f5f7"}}></span>
              </div>
            </a>
            <p className="text-center no-margin">Purple</p>
          </li>
          <li style={{float:"left", width: "33.33333%", padding: "5px"}} onClick={this.handleThemeChange.bind(this, "Blue")}>
            <a href="javascript:void(0)" data-skin="skin-blue" style={{display: "block", boxShadow: "0 0 3px rgba(0,0,0,0.4)"}} className="clearfix full-opacity-hover">
              <div>
                <span style={{display:"block", width: "20%", float: "left", height: "7px", background: "#367fa9"}}></span>
                <span className="bg-light-blue" style={{display:"block", width: "80%", float: "left", height: "7px"}}></span>
              </div>
              <div>
                <span style={{display:"block", width: "20%", float: "left", height: "20px", background: "#222d32"}}></span>
                <span style={{display:"block", width: "80%", float: "left", height: "20px", background: "#f4f5f7"}}></span>
              </div>
            </a>
            <p className="text-center no-margin">Blue</p>
          </li>
          <li style={{float:"left", width: "33.33333%", padding: "5px"}} onClick={this.handleThemeChange.bind(this, "Black")}>
            <a href="javascript:void(0)" data-skin="skin-black" style={{display: "block", boxShadow: "0 0 3px rgba(0,0,0,0.4)"}} className="clearfix full-opacity-hover">
              <div style={{boxShadow: "0 0 2px rgba(0,0,0,0.1)"}} className="clearfix">
                <span style={{display:"block", width: "20%", float: "left", height: "7px", background: "#fefefe"}}></span>
                <span style={{display:"block", width: "80%", float: "left", height: "7px", background: "#fefefe"}}></span>
              </div>
              <div>
                <span style={{display:"block", width: "20%", float: "left", height: "20px", background: "#222"}}></span>
                <span style={{display:"block", width: "80%", float: "left", height: "20px", background: "#f4f5f7"}}></span>
              </div>
            </a>
            <p className="text-center no-margin">Blue</p>
          </li>
          <li style={{float:"left", width: "33.33333%", padding: "5px"}} onClick={this.handleThemeChange.bind(this, "Green")}>
            <a href="javascript:void(0)" data-skin="skin-green" style={{display: "block", boxShadow: "0 0 3px rgba(0,0,0,0.4)"}} className="clearfix full-opacity-hover">
              <div>
                <span style={{display:"block", width: "20%", float: "left", height: "7px"}} className="bg-green-active"></span>
                <span style={{display:"block", width: "80%", float: "left", height: "7px"}} className="bg-green"></span>
              </div>
              <div>
                <span style={{display:"block", width: "20%", float: "left", height: "20px", background: "#222d32"}}></span>
                <span style={{display:"block", width: "80%", float: "left", height: "20px", background: "#f4f5f7"}}></span>
              </div>
            </a>
            <p className="text-center no-margin">Green</p>
          </li>
          <li style={{float:"left", width: "33.33333%", padding: "5px"}} onClick={this.handleThemeChange.bind(this, "Red")}>
            <a href="javascript:void(0)" data-skin="skin-red" style={{display: "block", boxShadow: "0 0 3px rgba(0,0,0,0.4)"}} className="clearfix full-opacity-hover">
              <div>
                <span style={{display:"block", width: "20%", float: "left", height: "7px"}} className="bg-red-active"></span>
                <span style={{display:"block", width: "80%", float: "left", height: "7px"}} className="bg-red"></span>
              </div>
              <div>
                <span style={{display:"block", width: "20%", float: "left", height: "20px", background: "#222d32"}}></span>
                <span style={{display:"block", width: "80%", float: "left", height: "20px", background: "#f4f5f7"}}></span>
              </div>
            </a>
            <p className="text-center no-margin">Red</p>
          </li>
          <li style={{float:"left", width: "33.33333%", padding: "5px"}} onClick={this.handleThemeChange.bind(this, "Yellow")}>
            <a href="javascript:void(0)" data-skin="skin-yellow" style={{display: "block", boxShadow: "0 0 3px rgba(0,0,0,0.4)"}} className="clearfix full-opacity-hover">
              <div>
                <span style={{display:"block", width: "20%", float: "left", height: "7px"}} className="bg-yellow-active"></span>
                <span style={{display:"block", width: "80%", float: "left", height: "7px"}} className="bg-yellow"></span>
              </div>
              <div>
                <span style={{display:"block", width: "20%", float: "left", height: "20px", background: "#222d32"}}></span>
                <span style={{display:"block", width: "80%", float: "left", height: "20px", background: "#f4f5f7"}}></span>
              </div>
            </a>
            <p className="text-center no-margin">Yellow</p>
          </li>
        </ul>
      </aside>
    )
  }
}

export default AppTheme;
