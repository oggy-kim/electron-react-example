import React from 'react';

import icon from '../../assets/kavilab.png';
import test1 from '../../assets/test1.jpg';

function Photo() {
  return (
    <div className="photo">
      <div className="img">
        <img width="200px" alt="icon" src={icon} />
      </div>
      <div className="img">
        <img src={test1} alt="test1" key="test1" />
      </div>
    </div>
  );
}

export default Photo;
