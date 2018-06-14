import React from 'react';
import { shallow } from 'enzyme';
import Gift from './Gift';

describe('Gift', () => {
  const gift = shallow(<Gift />);

  it('renders properly', () => {
    expect(gift).toMatchSnapshot();
  });

  describe('when typing into the person input', () => {
    const person = "Uncle";

    beforeEach(() => {
      // On Change rather than click simulation you have to tell the change function what you want to change it to. Since this is simulating
      // A user changing an input field. In the DOM behavior, when changed, inputs fire the event object which contains the target object
      // which holds the target object.
      gift.find('.input-person').simulate('change', { target: { value: person } });
    });

    it("updates the person in `state`", () => {
      expect(gift.state().person).toEqual(person);
    });
  });

  describe('when typing into the present input', () => {
    const present = 'Golf Clubs';

    beforeEach(() => {
      gift.find('.input-present').simulate('change', {target: { value: present}})
    });

    it('updates the present in `state`', () => {
      expect(gift.state().present).toEqual(present);
    });
  });
});
