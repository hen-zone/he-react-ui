// @flow
import React, { Fragment } from 'react';
import Section from '../';
import Heading from '../../Heading';
import Paragraph from '../../Paragraph';
import LoadingStrip from '../../../Loading/LoadingStrip';
import styles from './Section.fixture.scss';

const loadingSkeleton = (
  <Fragment>
    <Paragraph key="1">
      This content is rendering as defined by the loadingSkeleton property and
      due to the loading property being set to true.
    </Paragraph>
    <LoadingStrip key="2" className={styles.loadingStrip} />
    <LoadingStrip key="3" className={styles.loadingStrip} />
    <div key="4" className={styles.sideBySide}>
      <LoadingStrip key="5" className={styles.loadingStrip} />
      <LoadingStrip key="6" className={styles.loadingStrip} />
    </div>
  </Fragment>
);

export default {
  component: Section,
  props: {
    loading: true,
    loadingSkeleton,
  },
  children: (
    <Fragment>
      <Paragraph>
        This component should be used for most standard content below the
        hierarchical level of the entire page.
      </Paragraph>
      <Heading>Section Heading</Heading>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Paragraph>
    </Fragment>
  ),
};
