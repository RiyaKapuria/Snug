import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Chats from './Chats';
import Conversation from './Conversation';
import { Error404 } from  './Error/Error404';

class ContentArea extends Component {
  render() {
    return (
      <div className="content-wrapper">
        <Switch>
          <Route exact path='/' render={() => (<Redirect to='/Chats' />)} />
          <Route path={'/Chats'} component={Chats} />
          <Route path={'/Conversation'} component={Conversation} />
          <Route path={'*'} component={Error404} />
        </Switch>
      </div>
    )
  }
}

export default ContentArea;
