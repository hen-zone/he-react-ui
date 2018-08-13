// @flow
import * as React from 'react';
import classnames from 'classnames';
import PrimaryNavigation from '../';
import Button from '../../../Form/Button';
import Icon from '../../../Icon';
import styles from '../../../Tutorial/Tutorial.scss';
import { TutorialOwner, TutorialStep, withTutorial } from '../../../Tutorial';
import type { TutorialProps } from '../../../Tutorial/TutorialContext';
import sharedProps from './sharedProps.fixtureData';

const IntroBox = withTutorial((props: TutorialProps & { id: string }) => (
  <TutorialStep id={props.id} centered>
    <div className={styles.tutorialIntroHeader}>
      <Icon
        key="h1"
        className={styles.heLogoWithText}
        name="HealthEngineWithText"
      />
      <h3 key="h2">Welcome</h3>
    </div>

    <Button id="takeTourBtn" onClick={props.onTutorialAdvance}>
      Take the tour
    </Button>
    <br />
    <Button link onClick={props.onTutorialDismiss}>
      Not now
    </Button>

    <div
      className={classnames(styles.tutorialIntroFooter, styles.greyBackground)}
    >
      <div className={styles.footerCell} key="c1" />
      <div className={styles.footerCell} key="c2">
        <Button key="cb1" className={styles.rightElement} link>
          Why we changed?
        </Button>
      </div>
    </div>

    <div className={styles.tutorialIntroFooter}>
      <div className={styles.footerCell} />
      <div className={styles.footerCell}>
        <Button
          className={styles.rightElement}
          link
          onClick={props.onTutorialDismiss}
        >
          Got it!
        </Button>
      </div>
    </div>
  </TutorialStep>
));

function NavWithTutorial({ navProps, steps, children }: any) {
  return (
    <TutorialOwner steps={steps} autoStart>
      <React.Fragment>{children}</React.Fragment>
      <NavTutorialAnimator {...navProps} />
    </TutorialOwner>
  );
}

const NavTutorialAnimator = withTutorial(
  ({ tutorialSteps, tutorialIndex, ...props }) => {
    const currentStep = tutorialSteps[tutorialIndex];

    const openBucketKeyForStep = {
      bucket1: 'BUCKET1',
      bucket2: 'BUCKET2',
      settings: 'SETTINGS',
    };

    const openKey = openBucketKeyForStep[currentStep];
    const maskPage = tutorialIndex !== -1;

    return openKey ? (
      <PrimaryNavigation {...props} maskPage={maskPage} openKey={openKey} />
    ) : (
      <PrimaryNavigation {...props} maskPage={maskPage} />
    );
  },
);

export default {
  component: NavWithTutorial,
  url: '/',
  props: {
    navProps: sharedProps(),
    steps: ['intro', 'new-nav', 'bucket1', 'bucket2', 'help', 'settings'],
  },

  children: (
    <React.Fragment>
      <IntroBox id="intro" />

      <TutorialStep id="new-nav" attachTo="BUCKET_HOME" showCarousel>
        <h3>New navigation</h3>

        <div>
          Duis in vulputate magna. Pellentesque luctus. <br />Vivamus lobortis
          sagittis lobortis. Curabitur.
        </div>
      </TutorialStep>

      <TutorialStep id="bucket1" attachTo="NAV_NORMAL" showCarousel>
        <h3>BUCKET1</h3>

        <div>Vivamus efficitur lacus at est ornare porta euismod non leo.</div>
      </TutorialStep>

      <TutorialStep id="bucket2" attachTo="NAV_NEW" showCarousel>
        <h3>BUCKET2</h3>

        <div>
          Donec molestie commodo convallis. Phasellus vitae purus et diam
          rhoncus efficitur.
        </div>
      </TutorialStep>

      <TutorialStep id="help" attachTo="BUCKET_HELP" showCarousel>
        <h3>Need some help?</h3>

        <div>
          Proin nibh nibh, condimentum a tristique in, porta eleifend ex. Proin
          sodales varius fermentum. Ut vitae elit nisi. Phasellus feugiat
          rhoncus pulvinar
        </div>
      </TutorialStep>

      <TutorialStep id="settings" attachTo="NAV_ITEM1" showCarousel>
        <h3>Settings</h3>

        <div>
          Nulla dolor nisl, faucibus non sagittis ut, viverra a arcu. Fusce
          maximus posuere metus vel egestas.
        </div>
      </TutorialStep>
    </React.Fragment>
  ),
};
