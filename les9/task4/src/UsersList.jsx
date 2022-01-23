import React, { Component } from 'react';
import Filter from './Filter.jsx';
import User from './User.jsx';

class UsersList extends Component {
  state = {
    filterText: '',
    count: this.props.users.length,
  };

  onChange = e => {
    this.setState({
      filterText: e.target.value,
    });
  };

  render() {
    const usersList = this.props.users.filter(user =>
      user.name.toLowerCase().includes(this.state.filterText.toLowerCase()),
    );

    return (
      <div>
        <div className="filter">
          <Filter
            count={usersList.length}
            filterText={this.state.filterText}
            onChange={this.onChange}
          />
        </div>
        <ul className="users">
          {usersList.map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
