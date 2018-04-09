import { chat_details } from '../actions/chat_action';

const INITIAL_STATE = { chat_details: null};

const chatDetailsReducer = (state = {
  INITIAL_STATE
}, action) => {
  switch (action.type) {
    case "chat_details":
      return {
        ...state,
        chat_details: action.payload
      };
    default:
      return state;
  }
};

export default chatDetailsReducer;
