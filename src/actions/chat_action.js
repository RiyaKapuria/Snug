import ApiCall from '../ApiCall';
import Cookies from 'js-cookie';


export function chatDetails() {
  return (dispatch) => {
   dispatch({type: "chat_details", payload: ApiCall.getChat()});
  }
}

export function conversationDetails() {
  return (dispatch) => {
   dispatch({type: "conversation_details", payload: ApiCall.getConversation()});
  }
}
