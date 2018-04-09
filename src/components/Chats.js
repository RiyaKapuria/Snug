import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import PageLoading from './PageLoading';
import { chatDetails } from '../actions/chat_action';


class Chats extends Component {
  componentWillMount() {
    this.props.chatDetails();
   }

  render() {
    let chat_details =
    (this.props.chatReducer && this.props.chatReducer.chat_details) ?
    this.props.chatReducer.chat_details.users[0] : [];
    return (
      <div>
        { chat_details.length <= 0 ?
          <PageLoading />
          :
          <div>
           <p>{chat_details.firstname}</p>
          </div>
         }
       </div>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(Chats);
