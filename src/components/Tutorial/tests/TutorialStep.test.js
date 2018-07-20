// @flow
import { mount } from 'enzyme';
import React from 'react';
import TutorialOwner from '../TutorialOwner';
import TutorialStep from '../TutorialStep';

jest.mock('../getCoordsForElementId.js');

function makeHarness(attachTo = null) {
  return mount(
    <TutorialOwner autoStart steps={['A', 'Z']}>
      <TutorialStep id="A" showCarousel attachTo={attachTo}>
        <span id="inStepA" />
      </TutorialStep>

      <TutorialStep id="Z" showCarousel>
        <span id="inStepZ" />
      </TutorialStep>
    </TutorialOwner>,
  );
}

describe('TutorialStep', () => {
  it('Should allow advancing by clicking the next button', () => {
    const harness = makeHarness();

    const stepShown = id => harness.find(`#inStep${id}`).exists();
    expect(stepShown('A')).toBeTruthy();
    expect(stepShown('Z')).toBeFalsy();

    harness.find('.nextBtn').simulate('click');

    expect(stepShown('A')).toBeFalsy();
    expect(stepShown('Z')).toBeTruthy();

    expect(harness.find('.nextBtn').exists()).toBeFalsy();
  });

  it('Should allow dismissing', () => {
    const harness = makeHarness();

    const stepShown = id => harness.find(`#inStep${id}`).exists();

    expect(stepShown('A')).toBeTruthy();
    expect(stepShown('Z')).toBeFalsy();

    harness.find('svg.close').simulate('click');

    expect(stepShown('A')).toBeFalsy();
    expect(stepShown('Z')).toBeFalsy();
  });

  it('should follow its target element', () => {
    const harness = makeHarness('100-200-300');

    expect(
      harness
        .find('#inStepA')
        .closest('.outer')
        .prop('style'),
    ).toMatchSnapshot();
  });
});
