import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SocialShare from '../Components/Organisms/SocialShare';

Enzyme.configure({ adapter: new Adapter() })


describe('<SocialShare /> rendering', () => {
  it("renders App component without crashing", () => {
    shallow(<SocialShare />);
  });
})
