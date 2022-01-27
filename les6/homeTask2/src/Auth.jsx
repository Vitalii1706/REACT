import React, { Component } from 'react';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
import Spinner from './Spinner.jsx';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
      isSpinner: false,
    };
  }

  handleLogin = () => {
    this.setState({
      isLogin: false,
    });
    this.showSpinner();
  };

  handleLogout = () => {
    this.setState({
      isLogin: true,
    });
    this.showSpinner();
  };

  showSpinner = () => {
    this.setState({ isSpinner: true });
    setTimeout(() => {
      this.setState({
        isSpinner: false,
      });
    }, 1000);
  };

  render() {
    console.log('RENDER');
    let button;
    if (this.state.isLogin) {
      button = <Login onLogin={this.handleLogin} />;
    } else {
      button = <Logout onLogout={this.handleLogout} />;
    }

    return <div> {this.state.isSpinner ? <Spinner size={'50px'} /> : button}</div>;
  }
}

export default Auth;
