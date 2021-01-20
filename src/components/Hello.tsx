import React from 'react';

import icon from '../../assets/kavilab.png';

function Hello() {
  return (
    <>
      <div className="hello">
        <img width="200px" alt="icon" src={icon} />
        <h1>KAVILAB with electron.js + React.js</h1>
        <a href="https://kavilab.ai/" target="_blank" rel="noreferrer">
          <button type="button">
            <span role="img" aria-label="website">
              👨‍💻
            </span>
            Go to Website
          </button>
        </a>
      </div>
    </>
  );
}

export default Hello;
