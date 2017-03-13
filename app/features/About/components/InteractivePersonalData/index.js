import React  from "react";

export default class InteractivePersonalData extends React.Component {

  static propTypes = {
    person: React.PropTypes.object.isRequired,
    onSubmit: React.PropTypes.func.isRequired
  };

  render() {
    return (
      <div className="TODO">
        <div className="input-group">
          <span className="input-group-addon">Name: TODO</span>
          <input type="text" className="form-control"/>
        </div>
        <div className="input-group">
          <span className="input-group-addon">Age: TODO</span>
          <input type="number" className="form-control"/>
        </div>
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Image URL..."/>
          <span className="input-group-btn">
            <button className="btn btn-success" type="button">Update Image</button>
          </span>
        </div>
        <div>
          <img src="TODO" className="TODO"/>
        </div>
      </div>
    );
  }

}
