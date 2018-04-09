import { chat_details, CONVERSATION_DETAILS } from '../actions/chat_action';

const INITIAL_STATE = { chat_details: null , conversation_details: null};

const chatReducer = (state = {
  INITIAL_STATE
}, action) => {
  switch (action.type) {
    case "chat_details":
      return {
        ...state,
        chat_details: action.payload
      };
    case "CONVERSATION_DETAILS":
      return {
        ...state,
        conversation_details: action.payload
      };
    default:
      return state;
  }
};

export default chatReducer;
