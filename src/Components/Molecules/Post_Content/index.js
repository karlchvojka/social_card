// Current Component Imports
import React from 'react';
import './index.scss';

// Other Component Imports

function PostContent(props) {
  return (
    <section className="post_Content">
      <h3>{props.Title}</h3>
      <p>{props.Excerpt}</p>
      <p className="postLink"><a href={props.Url}>{props.LinkText}</a></p>
    </section>
  )
}

export default PostContent;
