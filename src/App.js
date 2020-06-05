import React from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header><h1>Social Card</h1></header>
      <main>
        <article>
          <section className="social_Card_Wrap">
            <aside className="image_Wrap">
              // TODO: Add profile image of the user
            </aside>
            <article className="social_Card">
              <header className="user_profile">
                // TODO: Add information about the posting user
                // 1. The full name of the user
                // 2. The nickname version of the user
                // 3. The date the post was made.
                // 4. Title of the post
                // 5. If a repost, the name of the original author.
              </header>
              <section className="post_Image">
                // TODO: Add image representation of the post. Could be OG image/other
              </section>
              <section>
                // TODO: Post title
                // TODO: Text from the post itself
                // TODO: Show text of the homepage from the link.
              </section>
              <section>
                // TODO: Number Representation of the comments
                // TODO: Number Representation of the Retweets
                // TODO: Number Representation of the Likes.
                // TODO: Send via DM icon.
              </section>
            </article>
          </section>
        </article>
      </main>
    </div>
  );
}

export default App;
