import React from 'react';

export default class Panel extends React.Component {

  static propTypes = {
    title: React.PropTypes.string,
    children: React.PropTypes.node.isRequired
  };

  render() {
    const {title} = this.props;
    let headingContent = null;
    if (title) {
      headingContent = (
        <div className="panel-heading">
          <h3 className="panel-title">{title}</h3>
        </div>
      );
    }

    return (
      <div className="panel panel-info">
        {headingContent}
        <div className="panel-body">
          {React.Children.toArray(this.props.children)}
        </div>
      </div>
    );
  }
}
