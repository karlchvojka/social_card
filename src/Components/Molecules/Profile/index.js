import React from 'react';
import './index.scss';

function Profile(props) {
  return (
    <header className="user_profile">
      <p className="titleLine">
        <b>The Dev Blog</b>

        <span className="postMeta">
          {`@${props.username} \u{000B7} ${props.postDate}`}
        </span>
      </p>

      <p>
        {props.title}
      </p>

      <p>
        {'{ author: '}

        <a
          alt={props.username}
          href={props.authUrl}
        >
          {props.author}
        </a>

        {' }'}
      </p>
    </header>
  )
}

export default Profile;
