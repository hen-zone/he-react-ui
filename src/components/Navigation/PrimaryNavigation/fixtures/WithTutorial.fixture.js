// @flow
import * as React from 'react';
import classnames from 'classnames';
import PrimaryNavigation from '../';
import Button from '../../../Form/Button';
import Icon from '../../../Icon';
import styles from '../../../Tutorial/Tutorial.scss';
import { TutorialOwner, TutorialStep, withTutorial } from '../../../Tutorial';
import type { TutorialProps } from '../../../Tutorial/TutorialContext';

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

const sharedNavProps = {
  logoutRoute: '/logout',
  locations: [
    {
      value: 'Location A',
      label: 'Location A',
    },
    {
      value: 'Location B',
      label: 'Location B',
    },
  ],
  bottomKeys: ['HELP', 'SETTINGS'],
  items: [
    {
      key: 'HOME',
      label: 'Home',
      icon: 'Home',
      title: 'Homepage',
      items: null,
      route: '/',
      exact: true,
    },
    {
      key: 'BUCKET1',
      label: 'Bucket 1',
      icon: 'Engage',
      title: 'Your first bucket',
      items: [
        {
          key: 'NORMAL',
          title: 'Normal stuff',
          label: 'Normal item',
          route: '/normal',
          items: [
            {
              key: 'MAIN',
              label: 'Main',
              route: '/normal',
            },
            {
              key: 'SECOND',
              label: 'Second',
              route: '/normal/second',
            },
          ],
        },
        {
          key: 'NOTIFICATIONS',
          title: 'Notifications',
          label: 'Notifications',
          route: '/notifications',
          notifications: 23,
          items: [
            {
              key: 'MAIN',
              label: 'Main',
              route: '/notifications',
            },
            {
              key: 'SECOND',
              label: 'Second',
              route: '/notifications/second',
            },
            {
              key: 'THIRD',
              label: 'Third',
              route: '/notifications/third',
            },
          ],
        },
      ],
    },
    {
      key: 'BUCKET2',
      label: 'Bucket 2',
      icon: 'Megaphone',
      title: 'Your second bucket',
      items: [
        {
          key: 'FREE',
          title: 'Free item',
          label: 'Free item',
          route: '/free',
          badge: 'FREE',
          items: [
            {
              key: 'MAIN',
              label: 'Main',
              route: '/free',
            },
            {
              key: 'SECOND',
              label: 'Second',
              route: '/free/second',
            },
          ],
        },
        {
          key: 'NEW',
          title: 'New item',
          label: 'New item',
          route: '/new',
          badge: 'NEW',
          items: [
            {
              key: 'MAIN',
              label: 'Main',
              route: '/new',
            },
            {
              key: 'SECOND',
              label: 'Second',
              route: '/new/second',
            },
          ],
        },
      ],
    },
    {
      key: 'HELP',
      label: 'Help',
      title: 'Help',
      icon: 'Help',
      route: 'https://external.url/',
    },
    {
      key: 'SETTINGS',
      label: 'Settings',
      icon: 'Settings',
      title: 'Settings',
      items: [
        {
          key: 'ITEM1',
          title: 'Item 1',
          label: 'Item 1',
          route: '/settings-1',
          items: [
            {
              key: 'MAIN',
              label: 'Main',
              route: '/settings-1',
            },
            {
              key: 'SECOND',
              label: 'Second',
              route: '/settings-1/second',
            },
          ],
        },
        {
          key: 'ITEM2',
          title: 'Item 2',
          label: 'Item 2',
          route: '/settings-2',
          items: [
            {
              key: 'MAIN',
              label: 'Main',
              route: '/settings-2',
            },
            {
              key: 'SECOND',
              label: 'Second',
              route: '/settings-2/second',
            },
          ],
        },
        {
          key: 'ITEM3',
          title: 'Item 3',
          label: 'Item 3',
          route: '/settings-3',
          items: [
            {
              key: 'MAIN',
              label: 'Main',
              route: '/settings-3',
            },
            {
              key: 'SECOND',
              label: 'Second',
              route: '/settings-3/second',
            },
          ],
        },
      ],
    },
  ],
};

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
    navProps: sharedNavProps,
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
