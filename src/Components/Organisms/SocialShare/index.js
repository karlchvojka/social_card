// Current Component Imports
import React from 'react';
import './index.scss';

// Other Component Imports
import SocialCounter from '../../Molecules/SocialCounter';
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineRetweet } from 'react-icons/ai';
import { GoComment } from "react-icons/go";

// Variable Declarations
const counters = {
  comments: {
    socialClass: 'socialComments',
    Icon: GoComment,
  },

  retweets: {
    socialClass: 'socialRetweets',
    Icon: AiOutlineRetweet,
  },

  likes: {
    socialClass: 'socialLikes',
    Icon: AiOutlineHeart,
  },
};

function SocialShare(props) {
  return (
    <section className="socialCounters">
      {Object.keys(counters).map(counter => (
        <SocialCounter
          key={counter}
          socialClass={counters[counter].socialClass}
          IconImg={counters[counter].Icon}
          number={props[counter]}
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
