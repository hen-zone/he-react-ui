import React from 'react';
import Popover from '.';
import { Icon } from '../';
import styles from './index.scss';

const trigger = <Icon name="Help" style={{ cursor: 'pointer' }} />;

const parentLayout = {
  padding: 100,
};

export default [
  {
    name: 'base',
    component: Popover,
    props: {
      content: 'WOW!',
    },
    children: trigger,
    parentLayout,
  },
  {
    name: 'preferRight',
    component: Popover,
    props: {
      preferRight: true,
      content: 'WOW!',
    },
    children: trigger,
    parentLayout,
  },
  {
    name: 'triggerOnClick',
    component: Popover,
    props: {
      triggerOnClick: true,
      content: 'WOW!',
    },
    children: trigger,
    parentLayout,
  },
  {
    name: 'tooltip',
    component: Popover,
    props: {
      tooltip: true,
      content: 'I am a tooltip. I am one-line and non-interactive.',
    },
    children: trigger,
    parentLayout,
  },
  {
    name: 'className',
    component: Popover,
    props: {
      className: styles.wideRed,
      content: 'Get a load of this useful overlay!',
    },
    children: trigger,
    parentLayout,
  },
  {
    name: 'light',
    component: Popover,
    props: {
      light: true,
      content: 'Get a load of this useful overlay!',
    },
    children: trigger,
    parentLayout,
  },
  {
    name: 'complexContent',
    component: Popover,
    props: {
      content: (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div>
            <Icon name="Lock" />
          </div>

          <div style={{ padding: 4 }}>
            <div>Web plugin currently inactive</div>
            <div>
              Find out more about Web plugin and how to activate the feature
            </div>
            <div style={{ fontWeight: 'bold', textAlign: 'right' }}>
              <a href="#activate" style={{ color: 'white' }}>
                Activate Web plugin
              </a>
            </div>
          </div>
        </div>
      ),
    },
    children: trigger,
    parentLayout,
  },
];
