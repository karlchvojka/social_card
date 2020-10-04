import React from 'react';
import Enzyme, { shallow } from 'enzyme';
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
})
