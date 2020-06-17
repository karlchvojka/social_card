// Current Component Imports
import React from 'react';
import './index.scss';

// Other Component Imports

function PostContent(props) {
  return (
    <section className="post_Content">
      <h3>{props.title}</h3>

      <p>{props.excerpt}</p>

      <p className="postLink">
        <a href={props.url}>
          {props.linkText}
        </a>
      </p>
    </section>
  )
}

export default PostContent;
