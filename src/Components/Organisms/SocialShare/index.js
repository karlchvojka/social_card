// Current Component Imports
import React from 'react';
import './index.scss';

// Other Component Imports
import SocialCounter from '../../Molecules/SocialCounter';
import { AiOutlineRetweet } from 'react-icons/ai';

function SocialShare(props) {

  return (
    <section className="socialCounters">
      {props.counters.map((counter, index) => (
        <SocialCounter
          key={index}
          SocialClass = {counter.SocialClass}
          IconImg = {counter.Icon}
          Number = {counter.Number}
        />
      ))}
      <div className="socialSendDM">
        <div className="counterIcon">
          <AiOutlineRetweet/>
        </div>
      </div>
    </section>
  )
}

export default SocialShare;
