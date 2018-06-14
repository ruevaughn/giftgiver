import React from 'react';
import { shallow } from 'enzyme';
import Gift from './Gift';

describe('Gift', () => {
  const gift = shallow(<Gift />);

  it('renders properly', () => {
    expect(gift).toMatchSnapshot();
  });

  describe('when typing into the person input', () => {
    beforeEach(() => {
      // On Change rather than click simulation you have to tell the change function what you want to change it to. Since this is simulating
      // A user changing an input field. In the DOM behavior, when changed, inputs fire the event object which contains the target object
      // which holds the target object.
      gift.find('.input-person').simulate('change', { target: {value: 'Uncle' } });
    });

    it('updates the person in `state`', {} => {
      expect(gift.state(person).toEqual('Uncle');
    });
  });
});
