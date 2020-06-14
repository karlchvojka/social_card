// Current Component Imports
import React from 'react';
import './index.scss';

// Other Component Imports

function SocialCounter(props) {
  return (
    <div className={`socialCounter ${props.SocialClass}`}>
      <div className="counterIcon">
        {props.IconImg}
      </div>
      <div className="counterNum">
        <p>{props.Number}</p>
      </div>
    </div>
  )
}

export default SocialCounter;
