import React from 'react';
import './index.scss';

function Image(props) {
  return <img src={props.url} alt={props.alt} />
}

export default Image;
