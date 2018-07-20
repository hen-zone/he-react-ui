// @flow
import { mount } from 'enzyme';
import React from 'react';
import TutorialOwner from '../TutorialOwner';
import TutorialSpy from './TutorialSpy';

function makeHarness(autoStart = false) {
  return mount(
    <TutorialOwner autoStart={autoStart} steps={['A', 'B', 'C', 'Z']}>
      <TutorialSpy />
    </TutorialOwner>,
  );
}

describe('TutorialOwner', () => {
  it('Should not start by default', () => {
    const harness = makeHarness();
    expect(harness.find('#tutorialIndex').text()).toBe('-1');
    expect(harness.find('#currentStep').text()).toBe('');
  });

  it('Should start by default with autoStart=true', () => {
    const harness = makeHarness(true);
    expect(harness.find('#tutorialIndex').text()).toBe('0');
    expect(harness.find('#currentStep').text()).toBe('A');
  });

  it('Should advance normally', () => {
    const harness = makeHarness();
    harness.find('#onTutorialAdvance').simulate('click');
    expect(harness.find('#currentStep').text()).toBe('A');
    harness.find('#onTutorialAdvance').simulate('click');
    expect(harness.find('#currentStep').text()).toBe('B');
    harness.find('#onTutorialAdvance').simulate('click');
    expect(harness.find('#currentStep').text()).toBe('C');
    harness.find('#onTutorialAdvance').simulate('click');
    expect(harness.find('#currentStep').text()).toBe('Z');
    harness.find('#onTutorialAdvance').simulate('click');
    expect(harness.find('#currentStep').text()).toBe('');
  });

  it('Should permit dismissing', () => {
    const harness = makeHarness(true);
    expect(harness.find('#tutorialIndex').text()).toBe('0');
    harness.find('#onTutorialDismiss').simulate('click');
    expect(harness.find('#tutorialIndex').text()).toBe('-1');
  });

  it('Should permit jumping', () => {
    const harness = makeHarness(true);
    expect(harness.find('#currentStep').text()).toBe('A');
    harness.find('#onTutorialJump').simulate('click');
    expect(harness.find('#currentStep').text()).toBe('Z');
  });
});
