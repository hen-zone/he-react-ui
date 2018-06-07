import PropTypes from 'prop-types';
import React from 'react';
import Button from '../';

function Wrapper({ children }) {
  return (
    <div
      style={{
        width: 500,
        height: 400,
        margin: 24,
        padding: 8,
        border: 'solid 1px silver',
        background: 'white',
        borderRadius: 8,
      }}
    >
      <div style={{ float: 'right' }}>{children}</div>
    </div>
  );
}

Wrapper.propTypes = { children: PropTypes.any };

export default {
  component: Button,
  simulateSubmission: true,
  wrapper: { tag: Wrapper },
  children: 'floated',
};
