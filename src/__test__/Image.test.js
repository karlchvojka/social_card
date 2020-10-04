import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Image from '../Components/Atoms/Image';

Enzyme.configure({ adapter: new Adapter() })


describe('<Image/> rendering', () => {
  it("renders Image component without crashing", () => {
    shallow(<Image />);
  });
})
