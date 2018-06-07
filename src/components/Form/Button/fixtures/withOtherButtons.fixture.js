import React from 'react';
import Button from '../';

function Wrapper({ children }) {
  return (
    <div>
      <Button>I am to the left</Button>
      {children}
      <Button>I am to the right</Button>
    </div>
  );
}

export default {
  component: Button,
  wrapper: { tag: Wrapper },
  children: 'Click me for action',
};
