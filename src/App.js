// Imports
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Styles/fonts.scss';
import './App.scss';

// Component Imports
import ShareCard from './Components/Templates/ShareCard';


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
  // Set State Defaults
  const [user, setUser] = useState({});

  // TODO: Change out for Object, not state
  const [post] = useState({
    postTitle: 'Developing JS applications with ReactJS',
    postExcerpt: 'ReactJS is an amazing framework.Grapple shrouds stern crack Jennys tea cup Nelsons folly coxswain Sink me reef rigging tender. Broadside run a shot across the bow jack splice the main brace black spot bucko hardtack driver hands capstan.',
    postUrl: 'https://karlchvojka.com/blog/post-134',
    postDomain: 'https://karlchvojka.com',
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
          <ShareCard
            postClassName='social_Card_Wrap'
            postData={post}
            userData={user}
          />
        </main>
      </div>
    :
      <h2>Loading...</h2>
  );
}

export default App;
