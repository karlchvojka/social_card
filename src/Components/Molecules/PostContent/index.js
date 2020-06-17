// Current Component Imports
import React from 'react';
import './index.scss';

// Other Component Imports

const PostContent = ({
  excerpt = '',
  linkText = '',
  title = '',
  url = '',
}) => (
  <section className="post_Content">
    <h3>{title}</h3>

    <p>{excerpt}</p>

    <p className="postLink">
      <a
        alt={linkText}
        href={url}
        >
          {linkText}
      </a>
    </p>
  </section>
);

export default PostContent;
