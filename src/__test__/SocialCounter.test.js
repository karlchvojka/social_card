import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { GoComment } from "react-icons/go";
import SocialCounter from '../Components/Molecules/SocialCounter';

Enzyme.configure({ adapter: new Adapter() })

const wrapper = shallow(<SocialCounter />);

describe("<SocialCounter /> rendering", () => {
  it("renders App component without crashing", () => {
    expect(wrapper.find('.socialCounter')).toHaveLength(1);
  });

  it("renders counter Icon section", () => {
    expect(wrapper.find('.counterIcon')).toHaveLength(1);
  });

  it("renders the counterNum section", () => {
    expect(wrapper.find('.counterNum')).toHaveLength(1);
  });

  it("renders one p tag for the counterNum section", () => {
    expect(wrapper.find('p')).toHaveLength(1);
  })
});

describe("<ShareCard /> props tests", () => {

  const counters = {
    comments: {
      Icon: GoComment,
      socialClass: 'socialComments',
      name: "comments",
      number: 121
    },
  };

  const socialCounterWrapper = mount(
    <SocialCounter
      IconImg={counters.comments.Icon}
      key={counters.comments.name}
      number={counters.comments.number}
      socialClass={counters.comments.socialClass}
    />
  );

  it("Accepts the props", () => {
    expect(socialCounterWrapper.props().IconImg).toEqual(counters.comments.Icon);
    expect(socialCounterWrapper.props().number).toEqual(counters.comments.number);
    expect(socialCounterWrapper.props().socialClass).toEqual(counters.comments.socialClass);
  });
})
