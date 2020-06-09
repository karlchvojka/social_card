// Current Component Imports
import React from 'react';
import './index.scss';

// Other Component Imports
import Image from '../../Atoms/Image';

function SocialCounter(props) {
  return (
    <div className={`socialCounter ${props.SocialClass}`}>
      <Image url={props.ImageUrl} alt={props.ImageAlt} />
      <p>{props.Number}</p>
    </div>
  )
}

export default SocialCounter;
