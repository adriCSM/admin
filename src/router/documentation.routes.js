const routesDocumentation = [
  {
    path: '/documentation',
    name: 'Documentation',
    component: () => import('../views/DocsView.vue'),
    children: [
      {
        path: 'auth-post',
        name: 'AuthPost',
        component: () => import('../views/sectionDocumentation/AuthPost.vue'),
      },
      {
        path: 'auth-put',
        name: 'AuthPut',
        component: () => import('../views/sectionDocumentation/AuthPut.vue'),
      },
      {
        path: 'auth-delete',
        name: 'AuthDelete',
        component: () => import('../views/sectionDocumentation/AuthDelete.vue'),
      },
      {
        path: 'user-post',
        name: 'UserPost',
        component: () => import('../views/sectionDocumentation/UserPost.vue'),
      },
      {
        path: 'user-put',
        name: 'UserPut',
        component: () => import('../views/sectionDocumentation/UserPut.vue'),
      },
      {
        path: 'users-get',
        name: 'UsersGet',
        component: () => import('../views/sectionDocumentation/UsersGet.vue'),
      },
      {
        path: 'user-delete',
        name: 'UserDelete',
        component: () => import('../views/sectionDocumentation/UserDelete.vue'),
      },
    ],
  },
];
export default routesDocumentation;
