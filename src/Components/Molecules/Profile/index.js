import React from 'react';
import './index.scss';

function Profile(props) {
  return (
    <header className="user_profile">
      <p><b>The Dev Blog</b> @{props.username} &middot; {props.postDate}</p>
      <p>{props.title}</p>
      <p>{'{'} author: {props.author} {'}'}</p>
    </header>
  )
}

export default Profile;
