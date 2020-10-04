/**
 * @jest-environment jsdom
*/
import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Image from '../Components/Atoms/Image';

Enzyme.configure({ adapter: new Adapter() })

describe("<Image/> rendering", () => {
  it("renders Image component without crashing", () => {
    shallow(<Image />);
  });
});

describe("<Image/> props tests", () => {
  const image = {
    alt: "An alt tag",
    url: "http://www.google.com"
  };

  const imageWrapper = mount(<Image alt={image.alt} url={image.url}/>);

  it("Accepts the props", () => {
    expect(imageWrapper.props().alt).toEqual(image.alt);
    expect(imageWrapper.props().url).toEqual(image.url);
  });
})
