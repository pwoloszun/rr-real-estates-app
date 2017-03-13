import React from 'react';

export default class Counter extends React.Component {

  static propTypes = {
    value: React.PropTypes.number,
    onIncrement: React.PropTypes.func.isRequired,
    onDecrement: React.PropTypes.func.isRequired,
  };

  render() {
    return (
      <div>
        <h5>
          Count: {this.props.value}
        </h5>
        <button onClick={this.onIncrementHandler}>+</button>
        <button onClick={this.onDecrementHandler}>-</button>
      </div>
    );
  }

  onIncrementHandler = () => {
    this.props.onIncrement();
  };

  onDecrementHandler = () => {
    this.props.onDecrement();
  };

}
