// Current Component Imports
import React from 'react';
import './index.scss';

// Other Component Imports
import Image from '../../Atoms/Image'
import ShareCardContent from '../../Organisms/CardContent';

const ShareCard = ({
  userData = {
    name: {
      first: '',
      last: '',
      picture: {
        thumbnail: ''
      }
    }
  },
  postData = {}
}) => (
  <article className="social_Card_Wrap">
    <aside className="image_Wrap">
      <Image
        alt={`Thumbnail for ${userData.name.first} ${userData.name.last}`}
        url={userData.picture.thumbnail}
      />
    </aside>
    
    <ShareCardContent
      user={userData}
      post={postData}
    />
  </article>
);

export default ShareCard;
