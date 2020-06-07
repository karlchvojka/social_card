import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';

function App() {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    picture: '',
    thumb: ''
  });

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
    const fetchUser = async () => {
      const result = await axios(
        "https://randomuser.me/api",
      );
      // set resource for reference purposes.
      let resource = result.data.results[0];
      // Set current User state
      setUser({
        firstName: resource.name.first,
        lastName: resource.name.last,
        userName: resource.login.username,
        picture: resource.picture.large,
        thumb: resource.picture.thumbnail
      });

      // here for API reference.
      // TODO: Remove before publishing
      console.log(resource)
    };

    fetchUser();
   }, []);

  return (
    <div className="App">
      <header><h1>Social Card</h1></header>
      <main>
        <article>
          <section className="social_Card_Wrap">
            <aside className="image_Wrap">
              <img src={user.thumb} alt='Thumnail for {user.firstName} {user.lastName}' />
            </aside>
            <article className="social_Card">
              <header className="user_profile">
                { /*
                  TODO: Add information about the posting user
                  1. The full name of the user
                  2. The nickname version of the user
                  3. The date the post was made.
                  4. Title of the post
                  5. If a repost, the name of the original author.
                  */
                }

              </header>
              <section className="post_Image">
                { /* TODO: Add image representation of the post. Could be OG image/other */ }
                
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
  );
}

export default App;
