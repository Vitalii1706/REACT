import React from 'react';
import Pagination from './Pagination.jsx';
import User from './User.jsx';

class UsersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      itemPerPage: 3,
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
    const { currentPage, itemPerPage } = this.state;

    const start = (currentPage - 1) * itemPerPage;

    const usersToRender = users.slice(start, start + itemPerPage);

    return (
      <div>
        <Pagination
          goPrev={this.goPrev}
          goNext={this.goNext}
          currentPage={currentPage}
          totalItems={users.length}
          itemPerPage={itemPerPage}
        />
        <ul className="users">
          {usersToRender.map(user => (
            <User key={user.id} {...user}></User>
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
