import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import PageLoading from './PageLoading';
import { chatDetails } from '../actions/chat_action';


class Chats extends Component {
  componentWillMount() {
    this.props.chatDetails()
   }

  render() {
    let chat_details =
    (this.props.chatDetailsReducer && this.props.chatDetailsReducer.chat_details) ?
    this.props.chatDetailsReducer.chat_details.users[0] : [];
    return (
      <div>
        { chat_details.length <= 0 ?
          <PageLoading />
          :
          <div>
           chat_details.firstname
          </div>
         }
       </div>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(Chats);
