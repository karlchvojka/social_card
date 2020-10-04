// Imports
import React, { useState } from 'react';
import './Styles/fonts.scss';
import './App.scss';

// Component Imports
import ShareCard from './Components/Templates/ShareCard';

function App() {
  // Set State Defaults
  const [user, setUser] = useState({
    "gender": "female",
    "name": {
      "title": "Mrs",
      "first": "Margaretha",
      "last": "Kutzner"
    },
    "location": {
      "street": {
        "number": 8403,
        "name": "Kirchplatz"
      },
      "city": "Nebra (Unstrut)",
      "state": "Mecklenburg-Vorpommern",
      "country": "Germany",
      "postcode": 11294,
      "coordinates": {
        "latitude": "-44.2070",
        "longitude": "133.0048"
      },
      "timezone": {
        "offset": "-1:00",
        "description": "Azores, Cape Verde Islands"
      }
    },
    "email": "margaretha.kutzner@example.com",
    "login": {
      "uuid": "a7a6d897-09aa-4f39-90d3-abab416bfc10",
      "username": "blueostrich730",
      "password": "stocking",
      "salt": "MPO8mJvd",
      "md5": "5d2f41035c0f71f9343b418c995b09fd",
      "sha1": "0330546837cf3a437d6463475ae14bc28d4fcba6",
      "sha256": "9efc2f0e1754af9d87102fb4108d0b4871d8cccfa50cade10f550c7f609d0cb4"
    },
    "dob": {
      "date": "1979-10-01T03:37:21.011Z",
      "age": 41
    },
    "registered": {
      "date": "2014-04-16T04:34:14.740Z",
      "age": 6
    },
    "phone": "0037-9700433",
    "cell": "0179-8525207",
    "id": {
      "name": "",
      "value": null
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/24.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/24.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/24.jpg"
    }
  });

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
