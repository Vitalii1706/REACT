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
    isLoggedIn: false,
    isLoading: false,
  };

  handleLoginClick = () => {
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.setState({
        isLoading: false,
        isLoggedIn: true,
      });
    }, 2000);
  };

  render() {
    console.log('RENDER');
    const { isLoggedIn, isLoading } = this.state;
    if (isLoading && !isLoggedIn) {
      return <Spinner />;
    }

    if (isLoggedIn) {
      return <Logout />;
    }

    return <Login onLogin={this.handleLoginClick} />;
  }
}

export default Auth;
