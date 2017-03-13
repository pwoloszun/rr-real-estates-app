import React from 'react';

import { Counter } from "../../../components";

export default class LocalCounter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      localCount: 0
    }
  }

  render() {
    return (
      <div>
        <Counter
          value={this.state.localCount}
          onIncrement={this.localIncrement}
          onDecrement={this.localDecrement}
        />
      </div>
    );
  }

  updateLocalState(value) {
    this.setState({
      localCount: value
    });
  }

  localIncrement = () => {
    this.updateLocalState(this.state.localCount + 1);
  };

  localDecrement = () => {
    this.updateLocalState(this.state.localCount - 1);
  };
}
