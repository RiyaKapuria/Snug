import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import PageLoading from './PageLoading';
import { chatDetails, conversationDetails } from '../actions/chat_action';


class Chats extends Component {
  componentDidMount() {
    this.props.chatDetails();
    this.props.conversationDetails();
   }

  render() {
    let chat_details =
    (this.props.chatReducer && this.props.chatReducer.chat_details) ?
    this.props.chatReducer.chat_details.users[0].contacts : [];
    let conversation_details =
    (this.props.chatReducer && this.props.chatReducer.conversation_details) ?
    this.props.chatReducer.conversation_details.messages : [];
    return (
      <div>
        { chat_details.length <= 0 ?
          <PageLoading />
          :
          <div>
            {chat_details.map((values,key) => {
              return(
                <div key={key}>
                  <p>Friend: {values}</p>
                    {conversation_details.map((val,k) => {
                      return(
                        <p k={k}>{val.message}</p>
                      )
                    })}
                </div>
              )
            })}
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
    chatDetails: (chat_details ) => {
      dispatch(chatDetails(chat_details))
    },
    conversationDetails: ( conversation_details ) => {
      dispatch(conversationDetails(conversation_details))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Chats);
