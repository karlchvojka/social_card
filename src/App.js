// Imports
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';

// Component Imports
import Image from './Components/Atoms/Image';
import ShareCardContent from './Components/Organisms/CardContent';
import ShareCard from './Components/Templates/Card';

// Helper Functions
const fetchUser = async (setUser) => {
  const result = await axios(
    "https://randomuser.me/api",
  );
  // set resource for reference purposes.
  let resource = result.data.results[0];
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

  const Counters = [
    {
      SocialClass: 'socialComments',
      ImageUrl: 'https://img.icons8.com/metro/26/000000/comments.png',
      ImageAlt: 'Speech Bubble Icon',
      Number: post.postComments
    },
    {
      SocialClass: 'socialRetweets',
      ImageUrl: 'https://img.icons8.com/material-sharp/24/000000/retweet.png',
      ImageAlt: 'Retweet Icon',
      Number: post.postRetweets
    },
    {
      SocialClass: 'socialLikes',
      ImageUrl: 'https://img.icons8.com/windows/32/000000/like.png',
      ImageAlt: 'Likes Icon',
      Number: post.postLikes
    },
  ];

  useEffect(() => {
    fetchUser(setUser);
   }, []);

  return (
    // check to see if the user obj has a first name
    Object.keys(user).length > 0 ?
      <div className="App">
        <header><h1>Social Card</h1></header>
        <main>
          <ShareCard
            postClassName = 'social_Card_Wrap'
            userData = {user}
            postData = {post}
            countersData = {Counters}
          />
        </main>
      </div>
    :
      <h2>Loading...</h2>
  );
}

export default App;
