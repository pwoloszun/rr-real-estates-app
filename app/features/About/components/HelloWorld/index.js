import React, { Component } from "react";

import styles from "./styles.css";

export default class HelloWorld extends Component {

  static propTypes = {
    user: React.PropTypes.objectOf(React.PropTypes.string),
    onHeaderClick: React.PropTypes.func
  };

  constructor(props) {
    super(props);
    this.name = `HW ${Math.random()}`;
    this.handleHeaderClick = ::this.handleHeaderClick;
  }

  render() {
    let content = null;
    const {user} = this.props;
    if (user) {
      content = (<p>Greetings {user.name.toUpperCase()}!</p>);
    }
    return (
      <div>
        <h3 onClick={this.handleHeaderClick} className={styles.helloWorld}>Hi!!!</h3>
        {content}
      </div>
    );
  }

  handleHeaderClick(event) {
    event.preventDefault();
    console.log("qq", this.name);
    const {onHeaderClick, user} = this.props;
    onHeaderClick(user);
  }
}
