// @flow

import * as React from 'react';
import TutorialContext from './TutorialContext';

export default function withTutorial(Wrapped: Function) {
  return (props: *) => (
    <TutorialContext.Consumer>
      {tutorialProps => <Wrapped {...props} {...tutorialProps} />}
    </TutorialContext.Consumer>
  );
}
