import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PostContent from '../Components/Molecules/PostContent';

Enzyme.configure({ adapter: new Adapter() })


describe('<PostContent /> rendering', () => {
  it("renders App component without crashing", () => {
    shallow(<PostContent />);
  });
})
