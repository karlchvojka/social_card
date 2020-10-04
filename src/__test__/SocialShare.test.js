import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SocialShare from '../Components/Organisms/SocialShare';

Enzyme.configure({ adapter: new Adapter() })

const wrapper = shallow(<SocialShare />);
console.log(wrapper.debug());
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

})
