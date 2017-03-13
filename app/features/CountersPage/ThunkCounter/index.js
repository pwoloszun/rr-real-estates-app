import React from 'react';
import { connect } from 'react-redux';

import { Counter } from "../../../components";
import {
  fetchCounterValue,
  incrementCounter,
  decrementCounter
} from './actions';
import { NAME } from './reducer';

const loadingContent = (<h6>Loading...</h6>);

class ThunkCounter extends React.Component {

  render() {
    let {isLoading, counterValue, incrementCounter} = this.props;
    let loading = isLoading ? loadingContent : null;
    return (
      <div>
        TODO
        {loading}
      </div>
    );
  }

  componentDidMount() {
    // this.props.fetchCounterValue();
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

export default connect(mapStateToProps, mapDispatchToProps)(ThunkCounter);
