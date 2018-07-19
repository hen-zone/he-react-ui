// @flow

import * as React from 'react';

export type TutorialProps = {
  onTutorialAdvance: Function,
  onTutorialDismiss: Function,
  onTutorialJump: Function,
  tutorialIndex: number,
};

const defaultTutorialProps: TutorialProps = {
  onTutorialAdvance: () => {},
  onTutorialDismiss: () => {},
  onTutorialJump: () => {},
  tutorialIndex: -1,
};

const TutorialContext = React.createContext(defaultTutorialProps);
export default TutorialContext;
