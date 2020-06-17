// Current Component Imports
import React from 'react';
import './index.scss';

// Other Component Imports

const SocialCounter = ({
  IconImg = '',
  number = '',
  socialClass = '',
}) => (
  <div className={`socialCounter ${socialClass}`}>
    <div className="counterIcon">
      < IconImg />
    </div>

    <div className="counterNum">
      <p>{number}</p>
    </div>
  </div>
);

export default SocialCounter;
