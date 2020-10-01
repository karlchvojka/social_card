import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import axios from 'axios';

Enzyme.configure({ adapter: new Adapter() })

import App from '../App.js';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<App />);
})

describe('<App /> rendering', () => {
  it('should render one <header>', () => {
    expect(wrapper.find('header')).toHaveLength(1);
  });

  it('should render one h1', () => {
    expect(wrapper.find('h1')).toHaveLength(1)
  });

  it('should set user', done => {
    const response = {
      data: {
        results: [
        ]
      }
    }
    const mock = new MockAdapter(axios);
    mock.onGet('https://randomuser.me/api').reply(200, )
  })
})
