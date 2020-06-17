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
    Icon: GoComment,
    socialClass: 'socialComments',
  },

  likes: {
    Icon: AiOutlineHeart,
    socialClass: 'socialLikes',
  },

  retweets: {
    Icon: AiOutlineRetweet,
    socialClass: 'socialRetweets',
  },
};

const SocialShare = (props) => (
  <section className="socialCounters">
    {Object.keys(counters).map(counter => (
      <SocialCounter
        IconImg={counters[counter].Icon}
        key={counter}
        number={props[counter]}
        socialClass={counters[counter].socialClass}
      />
    ))}

    <div className="socialSendDM">
      <div className="counterIcon">
        <AiOutlineRetweet/>
      </div>
    </div>
  </section>
);

export default SocialShare;
