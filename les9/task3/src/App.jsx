import React, { Component } from 'react';
import UserForm from './UserForm.jsx';

class App extends Component {
  createUser = user => {
    console.log(user);
  };

  render() {
    return (
      <div>
        <UserForm onSubmit={this.createUser} />
      </div>
    );
  }
}

export default App;
