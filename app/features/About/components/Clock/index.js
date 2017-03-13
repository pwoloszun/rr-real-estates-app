import React, { Component } from "react";

export default class Clock extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let date = new Date();
    return (
      <h3>
        Time: {date.toLocaleTimeString()}
      </h3>
    );
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

}
