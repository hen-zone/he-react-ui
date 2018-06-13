import SubNavigation from '../';

export default {
  component: SubNavigation,
  url: '/feedback',
  props: {
    item: {
      items: [],
      key: 'placeholder',
      title: '',
      route: '#',
    },
    locations: [].map(location => ({ value: location, label: location })),
    loading: true,
    logoutRoute: '/logout',
  },
};
