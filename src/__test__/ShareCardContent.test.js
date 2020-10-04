import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ShareCardContent from '../Components/Organisms/ShareCardContent';

Enzyme.configure({ adapter: new Adapter() })

const wrapper = shallow(<ShareCardContent />);


describe('<ShareCardContent /> rendering', () => {
  it("renders ShareCardContent component without crashing", () => {
    expect(wrapper.find('article')).toHaveLength(1);
  });

  it("renders the Profile Component", () => {
    expect(wrapper.find('Profile')).toHaveLength(1);
  });

  it("renders a section element", () => {
    expect(wrapper.find('section')).toHaveLength(1);
  });

  it("renders the PostContent Component", () => {
    expect(wrapper.find('PostContent')).toHaveLength(1);
  });

  it("renders the SocialShare Component", () => {
    expect(wrapper.find('SocialShare')).toHaveLength(1);
  })
});

describe("<ShareCardContent /> props tests", () => {
  const user = {
    gender: "female",
    name: {
      first: "Margaretha",
      last: "Kutzner",
      title: "Mrs"
    },
    location: {
      city: "Nebra (Unstrut)",
      coordinates: {
        latitude: "-44.2070",
        longitude: "133.0048"
      },
      country: "Germany",
      postcode: 11294,
      state:"Mecklenburg-Vorpommern"
    },
    email: "margaretha.kutzner@example.com",
    login: {
      md5: "5d2f41035c0f71f9343b418c995b09fd",
      password: "stocking",
      salt: "MPO8mJvd",
      sha1: "0330546837cf3a437d6463475ae14bc28d4fcba6",
      sha256: "9efc2f0e1754af9d87102fb4108d0b4871d8cccfa50cade10f550c7f609d0cb4",
      username: "blueostrich730",
      uuid: "a7a6d897-09aa-4f39-90d3-abab416bfc10"
    },
    dob: {
      age: 41,
      date: "1979-10-01T03:37:21.011Z"
    },
    registered: {
      age: 6,
      date: "2014-04-16T04:34:14.740Z"
    },
    phone: "0037-9700433",
    cell: "0179-8525207",
    id: {
      name: "", value: null
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/24.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/24.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/24.jpg"
    }
  };


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

  const shareCardContentWrapper = mount(
    <ShareCardContent
      user={user}
      post={post}
    />
  );

  it("Accepts the props", () => {
    expect(shareCardContentWrapper.props().user).toEqual(user);
    expect(shareCardContentWrapper.props().post).toEqual(post);
  });
})
