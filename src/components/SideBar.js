import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

import { chatDetails } from '../actions/chat_action';


class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentWillMount() {
    this.props.chatDetails()
  }
  render() {
    let chat_details = (this.props.chatDetailsReducer && this.props.chatDetailsReducer.chat_details) ?
    this.props.chatDetailsReducer.chat_details.users[0] : [];
    return (
      <aside className="main-sidebar" style={{bottom: "0 !important"}}>
        <section className="sidebar" style={{height: "auto"}}>
          <div className="user-panel">
            <div className="pull-left image">
              <img src="dist/img/avatar2.png" className="img-circle" alt="User" />
            </div>
            <div className="pull-left info">
              <p>{chat_details.firstname} {chat_details.lastname}</p>
              <a href="#"><i className="fa fa-circle text-success"></i> Signed In</a>
            </div>
          </div>
          <form action="#" method="get" className="sidebar-form">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Search..." />
              <span className="input-group-btn">
                <button type="submit" name="search" id="search-btn" className="btn btn-flat">
                  <i className="fa fa-search"></i>
                </button>
              </span>
            </div>
          </form>
          <ul className="sidebar-menu tree" data-widget="tree">
            <li className="header">MAIN NAVIGATION</li>
            <li>
              <Link to="/New_Message">
                <i className="fa fa-dashboard"></i> <span> New Message</span>
              </Link>
            </li>
            <li>
              <Link to="/Chats">
                <i className="fa fa-user"></i>
                <span> Chats</span>
                <span className="pull-right-container">
                  <span className="label label-primary pull-right">2</span>
                </span>
              </Link>
            </li>
          </ul>
        </section>
      </aside>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    chatDetailsReducer: state.chatDetailsReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    chatDetails: (chat_details) => {
      dispatch(chatDetails(chat_details));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
