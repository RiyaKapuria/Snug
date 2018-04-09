import MyJson from './Json/users.json';
const ApiCalls = {

  getApiCall() {
    alert(MyJson)
    console.log(MyJson)
    // let base_url = "./Json/users.json";
    // return fetch(base_url, {
    //   method: "GET",
    //   dataType: 'json',
    // })
    // .then(function(response) {
    //   alert("ok")
    //   if (response.ok) {
    //     alert(response);
    //     console.log(JSON.parse(MyJson));
    //     console.log(response);
    //     return response.json();
    //   } else {
    //     var error = new Error(response.statusText);
    //     console.log(response);
    //     error.response = response;
    //     throw error;
    //   }
    // })
    // .then(function(json) {
    //   return json;
    //  })

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
