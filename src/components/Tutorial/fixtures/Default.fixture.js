// @flow
import React from 'react';
import classnames from 'classnames';
import Tutorial from '../';
import { Button } from '../..';
import CheckBox from '../../Form/CheckBox';
import Icon from '../../Icon';
import styles from '../Tutorial.scss';

export default {
  component: Tutorial,
  props: {
    showing: true,
    tutorialStages: {
      intro: {
        header: (
          <div className={styles.tutorialIntroHeader}>
            <Icon
              key="h1"
              className={styles.heLogoWithText}
              name="HealthEngineWithText"
            />
            <h3 key="h2">Welcome to your improved Practice Admin</h3>
          </div>
        ),
        content: (
          <div
            className={classnames(
              styles.tutorialIntroFooter,
              styles.greyBackground,
            )}
          >
            <div className={styles.footerCell} key="c1">
              <CheckBox
                id="neverShowAgain"
                name="neverShowAgain"
                className={styles.leftElement}
                label="Don't show me this again"
              />
            </div>
            <div className={styles.footerCell} key="c2">
              <Button key="cb1" className={styles.rightElement} link>
                Why we changed the Practice Admin
              </Button>
            </div>
          </div>
        ),
        top: null,
        left: null,
      },
      steps: [
        {
          header: 'Pellentesque',
          content: (
            <div>
              Duis in vulputate magna. Pellentesque luctus. <br />Vivamus
              lobortis sagittis lobortis. Curabitur.
            </div>
          ),
          top: '0px',
          left: '200px',
        },
        {
          header: 'Efficitur',
          content: (
            <div>
              Vivamus efficitur lacus at est ornare porta euismod non leo.
            </div>
          ),
          top: '0px',
          left: '100px',
        },
        {
          header: 'Provide better care experiences',
          content: (
            <div>
              Send recalls, message your <br />patients, and manage prescription<br />{' '}
              requests here.
            </div>
          ),
          top: '0px',
          left: '76px',
        },
        {
          header: 'Commodo?',
          content: (
            <div>
              Donec molestie commodo convallis. Phasellus vitae purus et diam
              rhoncus efficitur.
            </div>
          ),
          top: '0px',
          left: '76px',
        },
        {
          header: 'Condimentum',
          content: (
            <div>
              Proin nibh nibh, condimentum a tristique in, porta eleifend ex.
              Proin sodales varius fermentum. Ut vitae elit nisi. Phasellus
              feugiat rhoncus pulvinar
            </div>
          ),
          top: '0px',
          left: '76px',
        },
      ],
    },
  },
  children: <div />,
};
