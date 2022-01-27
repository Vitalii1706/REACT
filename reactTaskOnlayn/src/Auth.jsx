import React from 'react';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
import Spinner from './Spinner.jsx';

// algo
// 1. show Login by default
// 2. after login click - show Spiner for 2 seconds
// 3. after2 sec - shouw logout
// 4. after Logout click - show login

class Auth extends React.Component {
  // in: obj
  // ot: undef
  state = {
    isLogin: true,
    isSpinner: false,
  };

  handleLogin = () => {
    this.setState({ isLogin: false });
  };

  handleLogout = () => {
    this.setState({ isLogin: true });
    this.showSpinner();
  };

  showSpinner = () => {
    this.setState({ isSpinner: true });
    setTimeout(() => {
      this.setState({
        isSpinner: false,
      });
    }, 500);
  };

  render() {
    console.log('RENDER');
    let button;

    if (this.state.isLogin) {
      button = <Login onLogin={this.handleLogin} />;
    } else {
      button = <Logout onLogout={this.handleLogout} />;
    }

    return <> {this.state.isSpinner ? <Spinner /> : button}</>;
  }
}

export default Auth;
