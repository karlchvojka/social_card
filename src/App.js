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
    title: 'Developing JS applications with ReactJS',
    excerpt: 'ReactJS is an amazing framework.Grapple shrouds stern crack Jennys tea cup Nelsons folly coxswain Sink me reef rigging tender. Broadside run a shot across the bow jack splice the main brace black spot bucko hardtack driver hands capstan.',
    url: 'https://karlchvojka.com/blog/post-134',
    domain: 'https://karlchvojka.com',
    auth: "@KarlChvojka",
    date: "Oct 15",
    img: "/developer.jpeg",
    comments: 2,
    retweets: 23,
    likes: 345
  })

  useEffect(() => {
    fetchUser(setUser);
   }, []);

  return (
    // check to see if the user obj has a first name
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
  );
}

export default App;
