import React from 'react';
import './index.scss';

function Profile(props) {
  return (
    <header className="user_profile">
      <p className="titleLine"><b>The Dev Blog</b><span className="postMeta"> @{props.username} &middot; {props.postDate}</span></p>
      <p>{props.title}</p>
      <p>{'{'} author: <a href={props.authUrl} alt={props.username} >{props.author}</a> {'}'}</p>
    </header>
  )
}

export default Profile;
