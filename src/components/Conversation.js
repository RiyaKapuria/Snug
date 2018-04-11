import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';

import PageLoading from './PageLoading';
import { chatDetails, conversationDetails, messageSend } from '../actions/chat_action';


class Conversation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields:{message: ''}
    }
  }

  componentDidMount() {
    this.props.chatDetails();
    this.props.conversationDetails();
  }

   //Input change
   onChange(message, e) {
     let fields = this.state.fields;
     fields[message] = e.target.value;
     this.setState({fields});

    }

    //Send
    onSend() {
     const {messageSend} = this.props;
     messageSend({
       from: 1,
       to: this.props.location.state.friendId,
       message: this.state.fields["message"],
       sent_at: new Date()
     })
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
          <div className="box box-warning direct-chat direct-chat-warning">
            {friends.map((val,key) => {
              return(
                <div className="box-header with-border" key={key}>
                  {chat_details.map((values,key) => {
                    return(
                      <div key={key}>
                        {(val.id === values && this.props.location.state.friendId === values) ?
                          <div>
                            <h3 className="box-title">Conversation with {val.firstname} {val.lastname}</h3>
                              <div className="box-tools pull-right">
                                <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i>
                                </button>
                                <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times"></i>
                                </button>
                              </div>
                              {conversation_details.map((valu,key) => {
                                return(
                                  <div>
                                    {(valu.to === values || valu.from === values ) ?
                                      <div key={key}>
                                        <div>
                                          {valu.from === values ?
                                            <div className="direct-chat-msg">
                                              <div className="direct-chat-info clearfix">
                                                <span className="direct-chat-name pull-left">{val.firstname}</span>
                                                <span className="direct-chat-timestamp pull-right">{moment(valu.sent_at).format("ll")}</span>
                                              </div>
                                              <img className="direct-chat-img" src="dist/img/avatar4.png" />
                                              <div className="direct-chat-text">{valu.message}</div>
                                            </div>
                                            :null
                                          }
                                        </div>
                                        <div>
                                        {valu.to === values ?
                                          <div className="direct-chat-msg right">
                                            <div className="direct-chat-info clearfix">
                                              <span className="direct-chat-name pull-right">You</span>
                                              <span className="direct-chat-timestamp pull-left">{valu.sent_at}</span>
                                            </div>
                                            <img className="direct-chat-img" src="dist/img/avatar2.png" />
                                            <div className="direct-chat-text">{valu.message}</div>
                                          </div>
                                          :null
                                        }
                                      </div>
                                      </div>
                                      : null
                                    }
                                  </div>
                                )
                              })}
                              <div className="box-footer">
                                <form action="#" method="post">
                                  <div className="input-group">
                                    <input
                                      type="text"
                                      name="message"
                                      placeholder="Type Message ..."
                                      className="form-control"
                                      value={this.state.fields["message"]}
                                      onChange={this.onChange.bind(this, "message")}
                                    />
                                    <span className="input-group-btn">
                                      <button
                                        type="button"
                                        className="btn btn-warning btn-flat"
                                        onClick={this.onSend.bind(this)}>
                                      Send
                                    </button>
                                    </span>
                                  </div>
                                </form>
                              </div>
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
    },
    messageSend: ( message_send ) => {
      dispatch(messageSend(message_send))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Conversation);
