// Current Component Imports
import React from 'react';
import './index.scss';

// Other Component Imports

const SocialCounter = ({
  IconImg = '',
  number = '',
  socialClass = '',
}) => (
  <section className={`socialCounter ${socialClass}`}>
    <section className="counterIcon">
      <IconImg />
    </section>

    <section className="counterNum">
      <p>{number}</p>
    </section>
  </section>
);

export default SocialCounter;
