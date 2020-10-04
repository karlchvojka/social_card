import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ShareCardContent from '../Components/Organisms/ShareCardContent';

Enzyme.configure({ adapter: new Adapter() })


describe('<ShareCardContent /> rendering', () => {
  it("renders App component without crashing", () => {
    shallow(<ShareCardContent />);
  });
})
