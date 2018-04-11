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
    let chat_details = (this.props.chatReducer && this.props.chatReducer.chat_details) ?
    this.props.chatReducer.chat_details.users : [];
    let fridens = this.props.chatReducer.chat_details.users[0].contacts;
    return (
      <aside className="main-sidebar" style={{bottom: "0 !important"}}>
        <section className="sidebar" style={{height: "auto"}}>
          <div className="user-panel">
            <div className="pull-left image">
              <img src="dist/img/avatar2.png" className="img-circle" alt="User" />
            </div>
            <div className="pull-left info">
              <p>{chat_details[0].firstname} {chat_details[0].lastname}</p>
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
              <li className="treeview">
                <a href="#">
                  <i className="fa fa-user"></i> <span> My Contacts</span>
                    <span className="pull-right-container">
                      <span className="label label-primary pull-right">{fridens.length}</span>
                    </span>
                </a>
                <ul className="treeview-menu">
                {fridens.map((values,key) => {
                  return(
                  <li key={key}>
                    <Link to="/Conversation">
                      {chat_details.map((val,key) => {
                        return(
                          <div>
                            {values === val.id ?
                              <div><i className="fa fa-circle-o"></i>&emsp;{val.firstname}</div>
                              : null
                              }
                         </div>
                        )
                      })}
                    </Link>
                  </li>
                  )
                })}
                </ul>
              </li>
            <li>
              <Link to="/New_Message">
                <i className="fa fa-comments"></i> <span> New Message</span>
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
    chatReducer: state.chatReducer
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
