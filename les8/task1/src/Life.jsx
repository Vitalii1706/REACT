import React, { Component } from 'react';

class Life extends Component {
  constructor(props) {
    super(props);
    console.log('constructor: good place to create state');
  }

  componentDidMount() {
    console.log('componentDidMount: Api calls, subscriptions');
  }

  shouldComponentUpdate(nextProps) {
    console.log('shouldComponentUpdate(nextProps, nextState): decide to render or not to render');
    return this.props !== nextProps;
  }

  componentDidUpdate() {
    console.log('componentDidUpdate(prevProps, prevState): some updates based on new props');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount(): cleanup before DOM related component will be removed');
  }

  render() {
    console.log('return React element to build DOM');
    return <div>{this.props.number}</div>;
  }
}
export default Life;
