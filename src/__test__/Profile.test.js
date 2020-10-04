import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Profile from '../Components/Molecules/Profile';

Enzyme.configure({ adapter: new Adapter() })


describe('<Profile /> rendering', () => {
  it("renders App component without crashing", () => {
    shallow(<Profile />);
  });
})
