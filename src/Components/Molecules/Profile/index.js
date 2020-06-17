import React from 'react';
import './index.scss';

const Profile = ({
  author = '',
  authorUrl = '',
  postDate = '',
  title = '',
  username = '',
}) => (
  <header className="user_profile">
    <p className="titleLine">
      <b>The Dev Blog</b>

      <span className="postMeta">
        {`@${username} \u{000B7} ${postDate}`}
      </span>
    </p>

    <p>
      {title}
    </p>

    <p>
      {'{ author: '}

      <a
        alt={username}
        href={authorUrl}
        >
          {author}
      </a>

      {' }'}
    </p>
  </header>
);

export default Profile;
