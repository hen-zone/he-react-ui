// @flow
import React, { Fragment } from 'react';
import PrimaryNavigation from '../';
import Button from '../../../Form/Button';
import Heading from '../../../Layout/Heading';
import sharedProps from './sharedProps.fixtureData';

export default {
  component: PrimaryNavigation,
  url: '/',
  children: (
    <Fragment>
      <Heading>Example content</Heading>
      <Button>Hello there</Button>
    </Fragment>
  ),
  props: {
    siteName: 'Your Site',
    logoutRoute: '/logout',
    ...sharedProps(),
  },
};
