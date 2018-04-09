import ApiCall from '../ApiCall';
import Cookies from 'js-cookie';


export function chatDetails() {
  return (dispatch) => {
   dispatch({type: "chat_details"});
   ApiCall.getApiCall()
    .then((response) => {
      dispatch({type: "chat_details", payload: response});
      console.log("action:", response);
    })
    .catch((error) => {
      dispatch({type: "chat_details", payload: error});
    })
  }
}
