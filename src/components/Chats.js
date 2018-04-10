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
            {friends.map((val,key) => {
              return(
                <div key={key}>
                  {chat_details.map((values,key) => {
                    return(
                      <div key={key}>
                        {val.id === values ?
                          <div>
                            <p>Friends: {val.firstname} {val.lastname}</p>
                              {conversation_details.map((val,k) => {
                                return(
                                  <p k={k}>{val.message}</p>
                                )
                              })}
                          </div>
                          : null
                        }
                     </div>
                    )
                  })}
                </div>
                : null
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
