// Current Component Imports
import React from 'react';
import './index.scss';

// Other Component Imports

function SocialCounter(props) {
  return (
    <div className={`socialCounter ${props.socialClass}`}>
      <div className="counterIcon">
        < props.IconImg />
      </div>
      <div className="counterNum">
        <p>{props.number}</p>
      </div>
    </div>
  )
}

export default SocialCounter;
