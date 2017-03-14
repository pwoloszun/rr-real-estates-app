import React, { Component } from "react";

import styles from "./styles.css";

export default class HelloWorld extends Component {

  render() {
    return (
      <div>
        <h3 className={styles.helloWorld}>
          Hi!!!
        </h3>
      </div>
    );
  }

}
