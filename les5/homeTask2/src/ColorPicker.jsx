import React, { Component } from 'react';

class ColorPicker extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }
  onHoverCoral = () => {
    this.setState({
      text: 'Coral',
    });
  };
  onHoverAqua = () => {
    this.setState({
      text: 'Aqua',
    });
  };
  onHoverBisque = () => {
    this.setState({
      text: 'Bisque',
    });
  };
  reset() {
    this.setState({
      text: '',
    });
  }

  render() {
    return (
      <div>
        <div className="picker__title">{this.state.text}</div>
        <div>
          <button
            onMouseEnter={this.onHoverCoral}
            onMouseLeave={() => {
              this.reset();
            }}
            className="picker__button picker__button_coral"
          ></button>
          <button
            onMouseEnter={this.onHoverAqua}
            onMouseLeave={() => {
              this.reset();
            }}
            className="picker__button picker__button_aqua"
          ></button>
          <button
            onMouseEnter={this.onHoverBisque}
            onMouseLeave={() => {
              this.reset();
            }}
            className="picker__button picker__button_bisque"
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;