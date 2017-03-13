import React from 'react';
import { connect } from 'react-redux';

import { Counter } from "../../../components";
import { incrementCounter } from "./actions";
import { NAME } from "./reducer";

class SyncCounter extends React.Component {

  render() {
    const {counterValue, incrementCounter} = this.props;

    return (
      <div>TODO counter</div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    //TODO
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    //TODO
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SyncCounter);
