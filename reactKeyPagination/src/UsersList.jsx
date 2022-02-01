import React, { Component } from 'react';
import User from './User.jsx';
import Pagination from './Pagination.jsx';

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      itemsPerPage: 3,
    };
  }

  goPrev = () => {
    this.setState({
      currentPage: this.state.currentPage - 1,
    });
  };

  goNext = () => {
    this.setState({
      currentPage: this.state.currentPage + 1,
    });
  };

  render() {
    const { users } = this.props;
    const { currentPage, itemsPerPage } = this.state;

    const start = (currentPage - 1) * itemsPerPage;

    const usersToRender = users.slice(start, start + itemsPerPage);

    return (
      <>
        <Pagination
          goPrev={this.goPrev}
          goNext={this.goNext}
          currentPage={currentPage}
          totalItems={users.length}
          itemsPerPage={itemsPerPage}
        />
        <ul className="users">
          {usersToRender.map(user => (
            <User key={user.id} {...user}></User>
          ))}
        </ul>
      </>
    );
  }
}

export default UsersList;
