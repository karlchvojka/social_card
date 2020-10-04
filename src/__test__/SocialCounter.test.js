import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
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
})
