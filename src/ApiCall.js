import MyUser from './Json/users.json';
import MyConversation from './Json/messages.json';

const ApiCalls = {

  getChat() {
    return(MyUser)
  },
  getConversation() {
    return(MyConversation)
  },
  postMessage(input) {
    console.log("input",input);
    //console.log(MyConversation);
    //var obj  = JSON.parse(MyConversation);
    //obj.messages[input] = {};
    //return(MyConversation)
  }

}

export default ApiCalls;
