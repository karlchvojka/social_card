import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Profile from '../Components/Molecules/Profile';

Enzyme.configure({ adapter: new Adapter() })

const wrapper = shallow(<Profile />);

describe('<Profile /> rendering', () => {
  it("renders App component without crashing", () => {
    expect(wrapper.find('header')).toHaveLength(1);
  });

  it("renders 3 P tags within the component", () => {
    expect(wrapper.find('p')).toHaveLength(3);
  });

  it("renders an a tag within the component", () => {
    expect(wrapper.find('a')).toHaveLength(1);
  });

  it("renders a bold tag", () => {
    const bold = (<b>The Dev Blog</b>);
    expect(wrapper.contains(bold)).toEqual(true);
  });

  it("renders a span tag", () => {
    expect(wrapper.find('span')).toHaveLength(1);
  });
});

describe("<ShareCard /> props tests", () => {

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

  const user = {
    login: {
      username: 'karl.chvojka'
    }
  }

  const profileWrapper = mount(
    <Profile
      author={post.auth}
      authUrl={post.domain}
      postDate={post.date}
      title={post.title}
      username={user.login.username}
    />
  );

  it("Accepts the props", () => {
    expect(profileWrapper.props().author).toEqual(post.auth);
    expect(profileWrapper.props().authUrl).toEqual(post.domain);
    expect(profileWrapper.props().postDate).toEqual(post.date);
    expect(profileWrapper.props().title).toEqual(post.title);
    expect(profileWrapper.props().username).toEqual(user.login.username);
  });
})
