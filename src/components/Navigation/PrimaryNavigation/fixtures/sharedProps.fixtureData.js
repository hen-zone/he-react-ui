// @flow
export default () => ({
  siteName: 'Your Site',
  logoutRoute: '/logout',
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
  bottomKeys: ['HELP', 'SETTINGS'],
  items: [
    {
      key: 'HOME',
      label: 'Home',
      icon: 'Home',
      title: 'Homepage',
      items: null,
      route: '/',
      exact: true,
    },
    {
      key: 'BUCKET1',
      label: 'Bucket 1',
      icon: 'Engage',
      title: 'Your first bucket',
      items: [
        {
          key: 'NORMAL',
          title: 'Normal stuff',
          label: 'Normal item',
          route: '/normal',
          items: [
            {
              key: 'MAIN',
              label: 'Main',
              route: '/normal',
            },
            {
              key: 'SECOND',
              label: 'Second',
              route: '/normal/second',
            },
          ],
        },
        {
          key: 'NOTIFICATIONS',
          title: 'Notifications',
          label: 'Notifications',
          route: '/notifications',
          notifications: 23,
          items: [
            {
              key: 'MAIN',
              label: 'Main',
              route: '/notifications',
            },
            {
              key: 'SECOND',
              label: 'Second',
              route: '/notifications/second',
            },
            {
              key: 'THIRD',
              label: 'Third',
              route: '/notifications/third',
            },
          ],
        },
      ],
    },
    {
      key: 'BUCKET2',
      label: 'Bucket 2',
      icon: 'Megaphone',
      title: 'Your second bucket',
      items: [
        {
          key: 'FREE',
          title: 'Free item',
          label: 'Free item',
          route: '/free',
          badge: 'FREE',
          items: [
            {
              key: 'MAIN',
              label: 'Main',
              route: '/free',
            },
            {
              key: 'SECOND',
              label: 'Second',
              route: '/free/second',
            },
          ],
        },
        {
          key: 'NEW',
          title: 'New item',
          label: 'New item',
          route: '/new',
          badge: 'NEW',
          items: [
            {
              key: 'MAIN',
              label: 'Main',
              route: '/new',
            },
            {
              key: 'SECOND',
              label: 'Second',
              route: '/new/second',
            },
          ],
        },
      ],
    },
    {
      key: 'HELP',
      label: 'Help',
      title: 'Help',
      icon: 'Help',
      route: 'https://external.url/',
    },
    {
      key: 'SETTINGS',
      label: 'Settings',
      icon: 'Settings',
      title: 'Settings',
      items: [
        {
          key: 'ITEM1',
          title: 'Item 1',
          label: 'Item 1',
          route: '/settings-1',
          items: [
            {
              key: 'MAIN',
              label: 'Main',
              route: '/settings-1',
            },
            {
              key: 'SECOND',
              label: 'Second',
              route: '/settings-1/second',
            },
          ],
        },
        {
          key: 'ITEM2',
          title: 'Item 2',
          label: 'Item 2',
          route: '/settings-2',
          items: [
            {
              key: 'MAIN',
              label: 'Main',
              route: '/settings-2',
            },
            {
              key: 'SECOND',
              label: 'Second',
              route: '/settings-2/second',
            },
          ],
        },
        {
          key: 'ITEM3',
          title: 'Item 3',
          label: 'Item 3',
          route: '/settings-3',
          items: [
            {
              key: 'MAIN',
              label: 'Main',
              route: '/settings-3',
            },
            {
              key: 'SECOND',
              label: 'Second',
              route: '/settings-3/second',
            },
          ],
        },
      ],
    },
  ],
});
