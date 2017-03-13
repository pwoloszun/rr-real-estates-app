import React, { Component } from "react";

//TODO
// this.setState((prevState, props) => {
//   return newState;
// });

export default class RouteForm extends Component {

  render() {
    return (
      <div className="panel panel-info">
        <div className="panel-heading">Create New Route</div>
        <div className="panel-body">
          <div className="input-group">
            <input type="text" className="form-control"/>
            <span className="input-group-btn">
              <button className="btn btn-success">Save</button>
              <button className="btn btn-default">Cancel</button>
            </span>
          </div>
        </div>
      </div>
    );
  }

}
