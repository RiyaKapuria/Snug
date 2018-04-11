import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';

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
    return (
      <div>
        { chat_details.length <= 0 ?
          <PageLoading />
          :
          <div className="box direct-chat">
            {friends.map((val,key) => {
              return(
                <div key={key} className="box-header with-border">
                  {chat_details.map((values,key) => {
                    return(
                      <div key={key}>
                        {val.id === values ?
                          <div style={{backgroundColor: "#d2d6de"}}>
                              {conversation_details.map((valu,k) => {
                                return(
                                  <div>
                                    {(valu.to === values || valu.from === values) && (valu.msg_id === 3 || valu.msg_id === 4) ?
                                      <ul className="contacts-list" key={k}>
                                        <li>
                                          <Link to={{pathname: '/Conversation',state: {friendId: values}}}>
                                            <img className="contacts-list-img" src="dist/img/avatar4.png" alt="User Image" />
                                            <div className="contacts-list-info">
                                              <span className="contacts-list-name">
                                                {val.firstname} {val.lastname}
                                                <small className="contacts-list-date pull-right">{moment(valu.sent_at).format("ll")}</small>
                                              </span>
                                              <span className="contacts-list-msg">{valu.message}</span>
                                            </div>
                                          </Link>
                                        </li>
                                      </ul>
                                      : null
                                    }
                                  </div>
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
