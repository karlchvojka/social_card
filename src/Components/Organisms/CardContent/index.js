// Current Component Imports
import React from 'react';
import './index.scss';

// Other Component Imports
import Image from '../../../Components/Atoms/Image';
import Profile from '../../../Components/Molecules/Profile';
import PostContent from '../../../Components/Molecules/PostContent';
import SocialShare from '../../../Components/Organisms/SocialShare';

const ShareCardContent = ({
  post = {
    postAuth: '',
    postComments: '',
    postDate: '',
    postDomain: '',
    postExcerpt: '',
    postImg: '',
    postLikes: '',
    postRetweets: '',
    postTitle: '',
    postUrl: '',
  },
  user = {
    login: {
      username: ''
    }
  }
}) => (
  <article className="social_Card">
    <Profile
      author = {post.postAuth}
      authUrl = {post.postDomain}
      postDate = {post.postDate}
      title = {post.postTitle}
      username={user.login.username}
    />

    <section className="post_Image">
      <Image
        alt="Tweet Image"
        url={post.postImg}
      />
    </section>

    <PostContent
      excerpt = {post.postExcerpt}
      linkText = "karlchvojka.com"
      title = {post.postTitle}
      url = {post.postUrl}
    />

    <SocialShare
      comments={post.postComments}
      likes={post.postLikes}
      retweets={post.postRetweets}
    />
  </article>
);

export default ShareCardContent;
