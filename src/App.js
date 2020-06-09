// Imports
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';

// Component Imports
import Image from './Components/Atoms/Image';
import Profile from './Components/Molecules/Profile';
import SocialCounter from './Components/Molecules/SocialCounter';
import PostContent from './Components/Molecules/Post_Content';

// Helper Functions
const fetchUser = async (setUser) => {
  const result = await axios(
    "https://randomuser.me/api",
  );
  // set resource for reference purposes.
  let resource = result.data.results[0];
  console.log(resource);
  // Set current User state
  setUser(resource);
};

function App() {
  const [user, setUser] = useState({});

  const [post, setPost] = useState({
    postTitle: 'Developing JS applications with ReactJS',
    postExcerpt: 'ReactJS is an amazing framework.Grapple shrouds stern crack Jennys tea cup Nelsons folly coxswain Sink me reef rigging tender. Broadside run a shot across the bow jack splice the main brace black spot bucko hardtack driver hands capstan.',
    postUrl: 'https://karl.chvojka.com/blog/post-134',
    postAuth: "@KarlChvojka",
    postDate: "Oct 15",
    postImg: "/developer.jpeg",
    postComments: 2,
    postRetweets: 23,
    postLikes: 345
  })

  useEffect(() => {
    fetchUser(setUser);
   }, []);

  return (
    // check to see if the user obj has a first name
    Object.keys(user).length > 0 ?
      <div className="App">
        <header><h1>Social Card</h1></header>
        <main>
          <article>
            <section className="social_Card_Wrap">
              <aside className="image_Wrap">
                <Image url={user.picture.thumbnail} alt={`Thumbnail for ${user.name.first} ${user.name.last}`} />
              </aside>
              <article className="social_Card">
                <Profile
                  username = {user.login.username}
                  postDate = {post.postDate}
                  title = {post.postTitle}
                  author = {post.postAuth}
                />
                <section className="post_Image">
                  <Image url={post.postImg} alt="Tweet Image" />
                </section>
                <PostContent
                  Title = {post.postTitle}
                  Excerpt = {post.postExcerpt}
                  Url = {post.postUrl}
                  LinkText = "karlchvojka.com"
                />
                <section className="socialCounters">
                  <SocialCounter
                    SocialClass = 'socialComments'
                    ImageUrl = 'https://img.icons8.com/metro/26/000000/comments.png'
                    ImageAlt = 'Speech Bubble Icon'
                    Number = {post.postComments}
                  />
                  <SocialCounter
                    SocialClass = 'socialRetweets'
                    ImageUrl = 'https://img.icons8.com/material-sharp/24/000000/retweet.png'
                    ImageAlt = 'Retweet Icon'
                    Number = {post.postRetweets}
                  />
                  <SocialCounter
                    SocialClass = 'socialLikes'
                    ImageUrl = 'https://img.icons8.com/windows/32/000000/like.png'
                    ImageAlt = 'Likes Icon'
                    Number = {post.postLikes}
                  />
                  <div className="socialSendDM">
                    <Image url="https://img.icons8.com/windows/32/000000/secured-letter--v1.png" alt="Letter Icon" />
                  </div>
                </section>
              </article>
            </section>
          </article>
        </main>
      </div>
    :
      <h2>Loading...</h2>
  );
}

export default App;
