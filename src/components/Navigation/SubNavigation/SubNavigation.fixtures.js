// @flow
import SubNavigation from './';

export default [
  {
    url: '/feedback',
    name: 'noItem',
    component: SubNavigation,
    props: {
      item: null,
      locations: [
        {
          value: 'Location A',
          label: 'Location A',
        },
      ],
      logoutRoute: '/logout',
    },
  },
  {
    name: 'OnePracticeWithChildren',
    component: SubNavigation,
    url: '/feedback',
    props: {
      item: {
        key: 'PARENT',
        title: 'Parent title',
        label: 'Parent',
        route: '/parent',
        badge: 'FREE',
        items: [
          {
            key: 'MAIN',
            label: 'Main',
            route: '/parent',
          },
          {
            key: 'SECONDARY',
            label: 'Secondary',
            route: '/parent/secondary',
          },
        ],
      },
      locations: [
        {
          value: 'Location A',
          label: 'Location A',
        },
      ],
      logoutRoute: '/logout',
    },
  },
  {
    name: 'onePractice',
    component: SubNavigation,
    url: '/feedback',
    props: {
      item: {
        key: 'PARENT',
        title: 'Parent title',
        label: 'Parent',
        route: '/parent',
        badge: 'FREE',
      },
      locations: [
        {
          value: 'Location A',
          label: 'Location A',
        },
      ],
      logoutRoute: '/logout',
    },
  },
  {
    name: 'noChildren',
    component: SubNavigation,
    url: '/',
    props: {
      item: {
        key: 'HOME',
        label: 'Home',
        icon: 'Home',
        title: 'Welcome home',
        route: '/',
        items: [],
      },
      logoutRoute: '/logout',
    },
  },
  {
    name: 'multiPracticeNoChildren',
    component: SubNavigation,
    url: '/feedback',
    props: {
      item: {
        key: 'PARENT',
        title: 'Parent title',
        label: 'Parent',
        route: '/parent',
        badge: 'FREE',
        items: [],
      },
      locations: [
        {
          value: 'Location A',
          label: 'Location A',
        },
        {
          value: 'Location B',
          label: 'Location B',
        },
      ],
      logoutRoute: '/logout',
    },
  },
  {
    name: 'loading',
    component: SubNavigation,
    url: '/feedback',
    props: {
      item: {
        items: [],
        key: 'placeholder',
        title: '',
        route: '#',
      },
      locations: [],
      loading: true,
      logoutRoute: '/logout',
    },
  },
  {
    component: SubNavigation,
    name: 'default',
    url: '/feedback',
    props: {
      item: {
        key: 'PARENT',
        title: 'Parent title',
        label: 'Parent',
        route: '/parent',
        badge: 'FREE',
        items: [
          {
            key: 'MAIN',
            label: 'Main',
            route: '/parent',
          },
          {
            key: 'SECONDARY',
            label: 'Secondary',
            route: '/parent/secondary',
          },
        ],
      },
      locations: [
        {
          value: 'Location A',
          label: 'Location A',
        },
        {
          value: 'Location B',
          label: 'Location B',
        },
      ],
      logoutRoute: '/logout',
    },
  },
];
