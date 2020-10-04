import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SocialShare from '../Components/Organisms/SocialShare';

Enzyme.configure({ adapter: new Adapter() })

const wrapper = shallow(<SocialShare />);

describe('<SocialShare /> rendering', () => {
  it("renders App component without crashing", () => {
    expect(wrapper.find('.socialCounters')).toHaveLength(1);
  });

  it("renders three SocialCounter components", () => {
    expect(wrapper.find('SocialCounter')).toHaveLength(3);
  });

  it("renders the socialSendDM section", () => {
    expect(wrapper.find('.socialSendDM')).toHaveLength(1);
    expect(wrapper.find('.counterIcon')).toHaveLength(1);
    expect(wrapper.find('AiOutlineRetweet')).toHaveLength(1);
  });

});

describe("<SocialShare /> props tests", () => {
  const post = {
    "title": "Developing JS applications with ReactJS",
    "excerpt": "ReactJS is an amazing framework.Grapple shrouds stern crack Jennys tea cup Nelsons folly coxswain Sink me reef rigging tender. Broadside run a shot across the bow jack splice the main brace black spot bucko hardtack driver hands capstan.",
    "url": "https://karlchvojka.com/blog/post-134",
    "domain": "https://karlchvojka.com",
    "auth": "@KarlChvojka",
    "date": "Oct 15",
    "img": "/developer.jpeg",
    "comments": 2,
    "retweets": 23,
    "likes": 345
  };

  const socialShareWrapper = mount(
    <SocialShare
      comments={post.comments}
      likes={post.likes}
      retweets={post.retweets}
    />
  );

  it("Accepts the props", () => {
    expect(socialShareWrapper.props().comments).toEqual(post.comments);
    expect(socialShareWrapper.props().likes).toEqual(post.likes);
    expect(socialShareWrapper.props().retweets).toEqual(post.retweets);
  });
})
