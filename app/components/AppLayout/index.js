import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

class AppLayout extends React.Component {

  static propTypes = {
    children: React.PropTypes.node,
    headerLinks: React.PropTypes.arrayOf(React.PropTypes.objectOf(React.PropTypes.string))
  };

  render() {
    const {headerLinks} = this.props;
    return (
      <div>
        <Header links={headerLinks}/>
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              {React.Children.toArray(this.props.children)}
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default AppLayout;
