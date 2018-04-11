import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import PageLoading from './PageLoading';
import { chatDetails, messageSend } from '../actions/chat_action';


class NewMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        to: '',
        message: ''
      },
      errors: {},
      formIsValid : true
    }
  }

  componentDidMount() {
    this.props.chatDetails();
   }

   //Input change
   onChange(field, e) {
     let fields = this.state.fields;
     fields[field] = e.target.value;
     this.setState({fields});
    }

    //Send
    onSend() {
     this.state.formIsValid = true;
     if(!this.state.fields["to"]) {
       this.state.errors["to"] = "To is required";
       this.state.formIsValid = false;
     }
     if(!this.state.fields["message"]) {
       this.state.errors["message"] = "Message is required";
       this.state.formIsValid = false;
     }
     const {messageSend} = this.props;
     messageSend({
       from: 1,
       to: this.state.fields.to,
       message: this.state.fields.message,
       sent_at: new Date()
     })
    }

    //Discard
    onDiscard() {
      this.setState({
        fields: {
          to: '',
          message: ''
        },
        errors: {},
        formIsValid: true
      });
    }


  render() {
    let chat_details =
    (this.props.chatReducer && this.props.chatReducer.chat_details) ?
    this.props.chatReducer.chat_details.users : [];
    return (
      <div>
        { chat_details.length <= 0 ?
          <PageLoading />
          :
          <div className="box box-primary">
            <div className="box-header with-border">
              <h3 className="box-title">Compose New Message</h3>
            </div>
            <div className="box-body">
              <div className="form-group">
                { !this.state.errors["to"] ?
                  <input
                    type="number"
                    className="form-control"
                    placeholder="To: Friend's ID"
                    value={this.state.fields["to"]}
                    onChange={this.onChange.bind(this, "to")} />
                  :
                  <div className="form-group has-warning">
                    <label className="control-label" htmlFor="inputWarning"><i className="fa fa-bell-o"></i> Input with warning</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="To:"
                      value={this.state.fields["to"]}
                      onChange={this.onChange.bind(this, "to")} />
                    <span className="help-block">{this.state.errors["to"]}</span>
                  </div>
                }
              </div>
              <div className="form-group">
              { !this.state.errors["message"] ?
                <textarea
                  id="compose-textarea"
                  className="form-control"
                  style={{height: "300px", zIndex: "auto", lineHeight: "20px", fontSize: "14px", transition: "none", background: "none"}}
                  value={this.state.fields["message"]}
                  onChange={this.onChange.bind(this, "message")}>
                </textarea>
                :
                <div className="form-group has-warning">
                  <textarea
                    id="compose-textarea"
                    className="form-control"
                    style={{height: "300px", zIndex: "auto", lineHeight: "20px", fontSize: "14px", transition: "none", background: "none"}}
                    value={this.state.fields["message"]}
                    onChange={this.onChange.bind(this, "message")}>
                  </textarea>
                  <span className="help-block">{this.state.errors["message"]}</span>
                </div>
              }
              </div>
              <div className="form-group">
                <div className="btn btn-default btn-file">
                  <i className="fa fa-paperclip"></i> Attachment
                  <input type="file" name="attachment" />
                </div>
              </div>
            </div>
            <div className="box-footer">
              <div className="pull-right">
                <button type="submit" className="btn btn-primary" onClick={this.onSend.bind(this)}>
                  <i className="fa fa-envelope-o"></i> Send
                </button>
              </div>
              <button type="reset" className="btn btn-default" onClick={this.onDiscard.bind(this)}>
                <i className="fa fa-times"></i> Discard
              </button>
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
    messageSend: ( message_send ) => {
      dispatch(messageSend(message_send))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewMessage);
