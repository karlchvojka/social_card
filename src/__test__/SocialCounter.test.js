import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SocialCounter from '../Components/Molecules/SocialCounter';

Enzyme.configure({ adapter: new Adapter() })


describe('<SocialCounter /> rendering', () => {
  it("renders App component without crashing", () => {
    shallow(<SocialCounter />);
  });
})
