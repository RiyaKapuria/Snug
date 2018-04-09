import MyUser from './Json/users.json';
import MyConversation from './Json/messages.json';

const ApiCalls = {

  getChat() {
    return(MyUser)
  },
  getConversation() {
    return(MyConversation)
  },

  postApiCall(url, input) {
    let base_url = "http://192.168.1.149:3000/api/";
    let fetch_url = base_url + url;
    let myHeaders = new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });
    return fetch(fetch_url, {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(input)
    })
    .then(function(response) {
      if (response.ok) {
        return response.json();
      } else {
        var error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
    })
    .then(function(json) {
      return json;
     })
  }

}

export default ApiCalls;
