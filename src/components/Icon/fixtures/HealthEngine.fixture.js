// @flow
import HealthEngine from '../HealthEngine';

export default [
  {
    name: 'HealthEngine',
    component: HealthEngine,
    props: {},
  },
  {
    name: 'HealthEngine-inverted',
    component: HealthEngine,
    props: {
      inverted: true,
    },
  },
];
