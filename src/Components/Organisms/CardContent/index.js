// Current Component Imports
import React from 'react';
import './index.scss';

// Other Component Imports
import Image from '../../../Components/Atoms/Image';
import Profile from '../../../Components/Molecules/Profile';
import PostContent from '../../../Components/Molecules/Post_Content';
import SocialShare from '../../../Components/Organisms/SocialShare';

function ShareCardContent(props) {

  return (
    <article className="social_Card">
      <Profile
        username={ props.user.login.username }
        postDate = {props.post.postDate}
        title = {props.post.postTitle}
        author = {props.post.postAuth}
        authUrl = {props.post.postDomain}
      />

      <section className="post_Image">
        <Image url={props.post.postImg} alt="Tweet Image" />
      </section>

      <PostContent
        title = {props.post.postTitle}
        excerpt = {props.post.postExcerpt}
        url = {props.post.postUrl}
        linkText = "karlchvojka.com"
      />

      <SocialShare
        comments={props.post.postComments}
        retweets={props.post.postRetweets}
        likes={props.post.postLikes}
      />
    </article>
  )
}

export default ShareCardContent;
