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
    showing: 'true',
    tutorialStages: null,
  },
  children: <div />,
};
