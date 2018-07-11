// @flow
import { shallow } from 'enzyme';
import React from 'react';
import testFixture from '../../../../config/testFixture';
import fixture from '../fixtures/Default.fixture.js';
import PopUp from '../PopUp.js';

testFixture(fixture, 'Default');

test('PopUp calls its handlers', () => {
  const onOpen = jest.fn();
  const onClose = jest.fn();
  const popUp = shallow(
    <PopUp showing={false} onOpen={onOpen} onClose={onClose}>
      placeholder
    </PopUp>,
  );

  popUp.setProps({ showing: true });

  expect(onOpen).toHaveBeenCalled();

  popUp.find('.close').simulate('click');

  expect(onClose).toHaveBeenCalled();

  popUp.find('.overlay').simulate('click');

  expect(onClose).toHaveBeenCalledTimes(2);

  popUp.instance().handleClose();
});
