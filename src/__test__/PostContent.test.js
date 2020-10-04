import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '@testing-library/jest-dom'
import PostContent from '../Components/Molecules/PostContent';

Enzyme.configure({ adapter: new Adapter() })

const wrapper = shallow(<PostContent />);

describe('<PostContent /> rendering', () => {
  it("renders PostContent component without crashing", () => {
    expect(wrapper.find('section')).toHaveLength(1);
  });

  it("renders an h3 without crashing", () => {
    expect(wrapper.find('h3')).toHaveLength(1);
  });

  it("renders two p tags without crashing", () => {
    expect(wrapper.find('p')).toHaveLength(2);
  });

  it("renders two p tags without crashing", () => {
    expect(wrapper.find('a')).toHaveLength(1);
  });
})

describe("<PostContent /> props tests", () => {
  const post = {
    excerpt: "A test excerpt",
    linkText: "Go To Google",
    title: "A test title",
    url: "http://www.google.com"
  };

  const postContentWrapper = mount(
    <PostContent
    excerpt={post.excerpt}
    linkText={post.linkText}
    title={post.title}
    url={post.url}
    />
  );

  it("Accepts the props", () => {
    expect(postContentWrapper.props().excerpt).toEqual(post.excerpt);
    expect(postContentWrapper.props().linkText).toEqual(post.linkText);
    expect(postContentWrapper.props().title).toEqual(post.title);
    expect(postContentWrapper.props().url).toEqual(post.url);
  });
})
