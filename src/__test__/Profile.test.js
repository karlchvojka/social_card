import React from 'react';
import Enzyme, { shallow } from 'enzyme';
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
  })
})
