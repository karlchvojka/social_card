// Current Component Imports
import React from 'react';
import './index.scss';

// Other Component Imports
import Image from '../../Atoms/Image'
import ShareCardContent from '../../Organisms/CardContent';

function ShareCard(props) {
  console.log(props)
  return (
    <article className="social_Card_Wrap">
      <aside className="image_Wrap">
        <Image url={props.userData.picture.thumbnail} alt={`Thumbnail for ${props.userData.name.first} ${props.userData.name.last}`} />
      </aside>
      <ShareCardContent
        user={props.userData}
        post={props.postData}
        counters={props.countersData}
      />
    </article>
  )
}

export default ShareCard;
