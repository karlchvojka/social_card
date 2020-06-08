import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';

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
    postTitle: 'This is a post title',
    postAuth: "@KarlChvojka",
    postDate: "Oct 15",
    postImg: "/developer.jpeg",
    postComments: 2,
    postRetweets: 20,
    postLikes: 5000
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
              <img src={user.picture.thumbnail} alt={`Thumbnail for ${user.name.first} ${user.name.last}`} />
            </aside>
            <article className="social_Card">
              <header className="user_profile">
                <p><b>The Dev Blog</b> @{user.login.username} &middot; {post.postDate}</p>
                <p>{post.postTitle}</p>
                <p>{'{'} author: {post.postAuth} {'}'}</p>
              </header>
              <section className="post_Image">
                <img src={post.postImg} />
              </section>
              <section>
                { /*
                  TODO: Post title
                  TODO: Text from the post itself
                  TODO: Show text of the homepage from the link.
                  */
                }
              </section>
              <section>
                { /*
                  TODO: Number Representation of the comments
                  TODO: Number Representation of the Retweets
                  TODO: Number Representation of the Likes.
                  TODO: Send via DM icon.
                  */
                }
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
