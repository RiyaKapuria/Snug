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
    let friends = this.props.chatReducer.chat_details.users;
    let conversation_details =
    (this.props.chatReducer && this.props.chatReducer.conversation_details) ?
    this.props.chatReducer.conversation_details.messages : [];
    console.log("??????????",chat_details);
    return (
      <div>
        { chat_details.length <= 0 ?
          <PageLoading />
          :
          <div>
            {friends.map((values,key) => {
              return(
                <div key={key}>
                  {values.id === chat_details ?
                    <div>{values.firstname} {values.lastname}</div>
                    : <div>{values.id}</div>
                  }
                </div>
                : null
              )
            })}
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
