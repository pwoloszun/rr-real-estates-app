import React from 'react';

import HelloWorld from './components/HelloWorld';
import Clock from './components/Clock';

// http://media.dcentertainment.com/sites/default/files/GalleryComics_1920x1080_20160323_bm_50_56d9d3898bd774.52001353.jpg

// let batman2 = {
//   name: "Batman2!!!",
//   age: 35,
//   image: {
//     url: "http://media.dcentertainment.com/sites/default/files/GalleryChar_1920x1080_BM_Cv38_54b5d0d1ada864.04916624.jpg"
//   }
// };

class About extends React.Component {
  render() {
    return (
      <div>
        <h5>About</h5>
      </div>
    );
  }

  renderHelloWorld() {
    //TODO
  }

  renderPersonalData() {
    let batman = {
      name: "Batman!!!",
      age: 12,
      image: {
        url: "http://media.dcentertainment.com/sites/default/files/GalleryChar_1920x1080_BM_Cv38_54b5d0d1ada864.04916624.jpg"
      }
    };
    //TODO
  }

  // renderTimers() {
  //   return (
  //     <div className="row">
  //       <Timer />
  //       <hr/>
  //       <Timer seconds={93}/>
  //     </div>
  //   );
  // }

}

export default About;
