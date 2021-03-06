import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App.js';

Enzyme.configure({ adapter: new Adapter() })

const wrapper = shallow(<App />);

describe('<App /> rendering', () => {
  it("renders the App component without crashing", () => {
    expect(wrapper.find('div')).toHaveLength(1);
  });

  it("renders the App component header without crashing", () => {
    const header = (<header><h1>Social Card</h1></header>);
    expect(wrapper.contains(header)).toEqual(true);
  });

  it("renders the App component main without crashing", () => {
    expect(wrapper.find('main')).toHaveLength(1);
  });

  it("renders the ShareCard component", () => {
    expect(wrapper.find('ShareCard')).toHaveLength(1);
  });
});
