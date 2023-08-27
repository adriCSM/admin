const routesUsers = [
  {
    path: '/users',
    name: 'Users',
    component: () => import('../views/UserView.vue'),
  },
  {
    path: '/users/:id',
    name: 'User Profile',
    component: () => import('../views/UserProfileview.vue'),
  },
  {
    path: '/user/profile',
    name: 'Profile',
    component: () => import('../views/ProfileView.vue'),
  },
];

export default routesUsers;
