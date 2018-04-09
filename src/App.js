import React, { Component } from 'react';
import { connect } from "react-redux";
import Cookies from 'js-cookie';

import SideBar from './components/SideBar';
import Footer from './components/Footer';
import AppTheme from './components/AppTheme';
import Header from './components/Header/Header';
import ContentArea from './components/ContentArea';
import Error500 from './components/Error/Error500';
import { chatDetails } from './actions/chat_action';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: Cookies.get('theme')
    }
  }

  changeTheme = (themeValue) => {
    this.setState({theme: themeValue});
    Cookies.set('theme', themeValue);
  }

  componentWillMount() {
    this.props.chatDetails()
  }

  render() {
    let classTheme = (Cookies.get('theme')) ? this.state.theme : "skin-purple" ;
    let chat_details = (this.props.chatReducer && this.props.chatReducer.chat_details) ?
    this.props.chatReducer.chat_details.user : [];
    return (
      <div>
        { chat_details ?
          <Error500 />
          :
          <div className={classTheme} style={{position: "relative"}}>
            <Header />
            <SideBar />
            <ContentArea />
            <Footer />
            <AppTheme onchangeTheme={this.changeTheme} />
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
    chatDetails: (chat_details) => {
      dispatch(chatDetails(chat_details));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
