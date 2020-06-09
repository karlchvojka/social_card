// Current Component Imports
import React from 'react';
import './index.scss';

// Other Component Imports
import Image from '../../Atoms/Image';
import SocialCounter from '../../Molecules/SocialCounter';

function SocialShare(props) {

  return (
    <section className="socialCounters">
      {props.counters.map((counter, index) => (
        <div className={counter.SocialClass}>
          <Image
            url={counter.ImageUrl}
            alt={counter.ImageAlt}
          />
          <p>{counter.Number}</p>
        </div>
      ))}
      <div className="socialSendDM">
        <Image
          url="https://img.icons8.com/windows/32/000000/secured-letter--v1.png"
          alt="Letter Icon"
        />
      </div>
    </section>
  )
}

export default SocialShare;
