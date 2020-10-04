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
    auth: '',
    comments: '',
    date: '',
    domain: '',
    excerpt: '',
    img: '',
    likes: '',
    retweets: '',
    title: '',
    url: '',
  },
  user = {
    login: {
      username: ''
    }
  }
}) => (
  <article className="social_Card">
    <Profile
      author={post.auth}
      authUrl={post.domain}
      postDate={post.date}
      title={post.title}
      username={user.login.username}
    />

    <section className="post_Image">
      <Image
        alt="Tweet Image"
        url={post.img}
      />
    </section>

    <PostContent
      excerpt={post.excerpt}
      linkText="karlchvojka.com"
      title={post.title}
      url={post.url}
    />

    <SocialShare
      comments={post.comments}
      likes={post.likes}
      retweets={post.retweets}
    />
  </article>
);

export default ShareCardContent;
