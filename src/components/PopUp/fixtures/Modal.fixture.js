// @flow
import React from 'react';
import PopUp from '../';
import { Paragraph } from '../..';

export default {
  component: PopUp,
  props: {
    showing: true,
    modal: true,
  },
  children: (
    <div>
      <Paragraph>
        This modal popup cannot be closed without a parent interfering.
      </Paragraph>
      <Paragraph>If only the showing property were set to false.</Paragraph>
    </div>
  ),
};
