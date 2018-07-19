// @flow
import Button from '../';

export default [
  {
    name: 'toUrl',
    component: Button,
    props: {
      to: '#this-works!',
    },
    children: 'I am an <a /> tag',
  },

  {
    name: 'toRouterUrl',
    component: Button,
    props: {
      withRouter: true,
      to: '#this-works!',
    },
    url: '/',
    children: 'I am a <Link /> tag',
    simulateSubmission: true,
  },
];
