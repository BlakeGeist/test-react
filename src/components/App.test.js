import App from './App';
import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('<App>', () => {
  it('renders App', () => {

    const root = shallow(
      <App />
    );

    expect(root.find('.App').length).toBe(1);
  });
});