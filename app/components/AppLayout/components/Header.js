import React from 'react';
import { Link } from 'react-router-dom';

const renderLinkFor = (linkData) => {
  return (
    <li key={linkData.path}>
      <Link to={linkData.path}>
        {linkData.label}
      </Link>
    </li>
  );
};

class Header extends React.Component {

  static propTypes = {
    links: React.PropTypes.arrayOf(React.PropTypes.objectOf(React.PropTypes.string))
  };

  render() {
    const {links} = this.props;
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/">Home</Link>
          </div>
          <ul className="nav navbar-nav navbar-right">
            {links.map(renderLinkFor)}
          </ul>
        </div>
      </nav>
    );
  }

}

export default Header;
