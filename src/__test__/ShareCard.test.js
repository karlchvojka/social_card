import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ShareCard from '../Components/Templates/ShareCard';

Enzyme.configure({ adapter: new Adapter() })


describe('<ShareCard /> rendering', () => {
  it("renders App component without crashing", () => {
    shallow(<ShareCard />);
  });
})
