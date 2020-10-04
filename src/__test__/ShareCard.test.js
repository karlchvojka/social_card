import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ShareCard from '../Components/Templates/ShareCard';

Enzyme.configure({ adapter: new Adapter() })

const wrapper = shallow(<ShareCard />);

describe('<ShareCard /> rendering', () => {
  it("renders ShareCard component without crashing", () => {
    expect(wrapper.find('article')).toHaveLength(1);
  });

  it("renders an aside", () => {
    expect(wrapper.find('aside')).toHaveLength(1);
  });

  it("renders the Image Component", () => {
    expect(wrapper.find('Image')).toHaveLength(1);
  });

  it("renders the SharedCardContent Component", () => {
    expect(wrapper.find('ShareCardContent')).toHaveLength(1);
  });
});
