import React from 'react';
import './index.scss';

const Image = ({
  alt = '',
  url = '',
}) => (
  <img
    alt={alt}
    src={url}
  />
);

export default Image;
