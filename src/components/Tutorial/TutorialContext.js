// @flow

import * as React from 'react';

export type TutorialProps = {
  onTutorialAdvance: Function,
  onTutorialDismiss: Function,
  onTutorialJump: Function,
  tutorialIndex: number,
  tutorialSteps: string[],
};

const defaultTutorialProps: TutorialProps = {
  onTutorialAdvance: () => {},
  onTutorialDismiss: () => {},
  onTutorialJump: () => {},
  tutorialIndex: -1,
  tutorialSteps: [],
};

const TutorialContext = React.createContext(defaultTutorialProps);
export default TutorialContext;
