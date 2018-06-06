import React from 'react';
import PopoverDisplay from '.';

export default [
  {
    name: 'base',
    component: PopoverDisplay,
    props: {},
    parentLayout: { padding: 100 },
    children: (
      <div>
        <b>I can contain any content you desire</b>
        <p>Just watch me</p>
      </div>
    ),
  },
  {
    name: 'light',
    component: PopoverDisplay,
    props: {
      light: true,
    },
    parentLayout: { padding: 100 },
    children: (
      <div>
        <b>I can contain any content you desire</b>
        <p>Just watch me</p>
      </div>
    ),
  },
  {
    name: 'tooltip',
    component: PopoverDisplay,
    props: { tooltip: true },
    parentLayout: { padding: 100 },
    children: 'I am a single-line tooltip',
  },
];
