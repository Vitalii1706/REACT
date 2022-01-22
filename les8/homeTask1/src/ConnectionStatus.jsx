import React, { Component } from 'react';

class ConnectionStatus extends Component {
  state = {
    status: 'online',
  };

  isOnline = () => {
    this.setState({
      status: 'online',
    });
  };

  isOnffline = () => {
    this.setState({
      status: 'offline',
    });
  };

  componentDidMount() {
    window.addEventListener('online', this.isOnline);
    window.addEventListener('offline', this.isOffline);
  }

  componentWillUnmount() {
    window.addEventListener('online', this.isOnline);
    window.addEventListener('offline', this.isOffline);
  }

  render() {
    console.log(this.state.status);
    const { status } = this.state;
    return <div className={`status ${status === 'offline' ? 'status_offline' : ''}`}>{status}</div>;
  }
}

export default ConnectionStatus;
