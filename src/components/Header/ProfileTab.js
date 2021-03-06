import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { connect } from 'react-redux';

import { chatDetails } from '../../actions/chat_action';


class ProfileTab extends Component {
  componentWillMount() {
    this.props.chatDetails();
  }

   render() {
    let chat_details = (this.props.chatReducer && this.props.chatReducer.chat_details.users) ?
    this.props.chatReducer.chat_details.users[0] : [];
    return (
      <li className="dropdown user user-menu">
        <a href="/" className="dropdown-toggle" data-toggle="dropdown">
          <img src="dist/img/avatar2.png" className="user-image" alt="User"/>
          <span className="hidden-xs">{chat_details.firstname} {chat_details.lastname}</span>
        </a>
        <ul className="dropdown-menu">
          <li className="user-header">
            <img src="dist/img/avatar2.png" className="img-circle" alt="User"/>
            <p>
              {chat_details.firstname} {chat_details.lastname}
              <small>{chat_details.number}</small>
            </p>
          </li>
          <li className="user-footer">
            <div className="pull-left">
              <a className="btn btn-default btn-flat">Logout</a>
            </div>
          </li>
        </ul>
      </li>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileTab);
